<div class="columns">
  <div class="column">
    <div class="card has-background-warning m-4 p-4 has-text-centered">
      {#if $is_game_start}
          <button class="button is-primary is-light" onclick={pauseQuiz}>
            Pause
          </button>
        {/if}
        {#if !$is_game_start}
          <button class="button is-primary is-light" onclick={startQuiz}>
            Start Quiz
          </button>
        {/if}
      <h1 class="has-text-white has-text-weight-bold has-text-centered py-6 title is-2">
        <i class="fa-regular fa-clock mr-2"></i> {formatTime($time)}
      </h1>
      
      {#if is_paused}
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content has-text-centered p-6">
            <h2 class="title is-3 has-text-white mb-6">Game Paused</h2>
            <p class="is-size-5 has-text-white mb-6">Click 
              <button class="button is-small is-rounded is-primary is-light mx-3" onclick={startQuiz}>
                Resume
              </button> to continue.</p>
          </div>
        </div>
      {/if}

      <div class="control mx-4 my-6">
        <div class="filed">
          <div class="box has-background-warning-light p-4  has-text-centered">
            <p class="has-text-dark is-size-1 has-text-weight-bold">{current_question || '80 + 50 = ?'}</p>
          </div>
        </div>
      </div>
      <div class="control mx-4 my-6">
        <div class="filed">
          <input 
            class="input is-medium is-transparent transparent-input" 
            bind:value={answer_input} 
            type="text" 
            placeholder="Write your answer"
            disabled={!$is_game_start}
            >
        </div>
      </div>
      <div class="control mx-4 mt-6 mb-4">
        <button class="button is-medium is-rounded is-fullwidth is-info-dark py-4" onclick={nextQuestion} disabled={!$is_game_start}> 
           Next
        </button>
      </div>
      <div class="control mx-4 mt-6 mb-4">
        <button class="button is-medium is-rounded is-fullwidth is-danger py-4" onclick={resetQuiz} disabled={!$is_game_start}> 
           Reset
        </button>
      </div>
    </div>
  </div>
</div>

<style>
   .transparent-input {
    background-color: rgb(243, 230, 166) !important;
    border: 2px solid rgba(56, 3, 3, 0.796);
    padding: 0.75rem 1.5rem;
    border-radius: 40px 40px 40px 40px;
    transition: all 0.3s ease;
    color: #000;
  }

  .transparent-input::placeholder {
    color: black;
    opacity: 0.5;
    font-weight: 400;
    font-size: 20px;
  }

  .transparent-input:focus,
  .transparent-input:active {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6); 
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { difficulty, questions, user_answers, is_game_start, is_game_end, time, time_taken, score, correct, wrong, total } from '$lib/stores';
  import { goto } from '$app/navigation';
  import { formatTime } from '$lib/utils';
  import { generateQuestions } from '$lib/quiz';

  
  let current_question_index = 0;
  let current_question = '';
  let answer_input = '';
  let timer_interval;
  let is_paused = false;

  $: if ($questions.length) {
    current_question = $questions[current_question_index]?.question;
  }

  function startQuiz() {
    is_game_start.set(true);
    is_paused = false;


    timer_interval = setInterval(() => {
      if (!is_paused) {
        time.update(t => t + 1);
      }
    }, 1000);
  }

  function pauseQuiz() {
    is_paused = true;
    clearInterval(timer_interval);
  }
 
  $: if ($is_game_start && !$is_game_end) {
    startTimer();
  }

  function startTimer() {
    time.set(0); 
    clearInterval();

    timer_interval = setInterval(() => {
      time.update(n => n + 1);
    }, 1000);
  }

  $: if ($is_game_end) {
  clearInterval(timer_interval);
}

  function nextQuestion() {
    const current_correct_answer = $questions[current_question_index]?.answer;
    if (parseInt(answer_input) === current_correct_answer) {
      correct.update(n => n + 1);
    } else {
      wrong.update(n => n + 1);
    }
    user_answers.update(ans => [...ans, answer_input]);
    answer_input = '';

    if (current_question_index < $questions.length - 1) {
      current_question_index += 1;
    } else {
      is_game_start.set(false);
      time_taken.set($time);
      goto('/score');
    }
  }

  function resetQuiz() {
    current_question_index = 0;
    current_question = '';
    answer_input = '';
    correct.set(0);
    wrong.set(0);
    score.set(0);
    user_answers.set([]);
    is_game_start.set(false);
    goto('/');
  }

  onMount(() => {
    generateQuestions($difficulty); 
    clearInterval(timerInterval);
  });
</script>
