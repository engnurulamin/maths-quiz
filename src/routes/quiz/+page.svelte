<div class="columns">
  <div class="column">
    <div class="card has-background-warning has-text-centered m-4 p-2">
      {#if $is_game_start}
        <button class="button is-small is-primary is-light" onclick={() => is_paused ? startQuiz() : pauseQuiz()}>
          {is_paused ? 'Resume' : 'Pause'}
        </button>
      {:else}
        <button class="button is-small is-primary is-light" onclick={startQuiz}>
          Start Quiz
        </button>
      {/if}
      <h1 class="has-text-white has-text-weight-semibold has-text-centered title is-4 mt-2">
        <i class="fa-regular fa-clock mr-1"></i> {formatTime($time)}
      </h1>
      <div class="control mx-5">
        <div class="filed">
          <div class="box has-background-warning-light has-text-centered box-shadow">
            <p class="has-text-dark is-size-2">{current_question || '80 + 50 = ?'}</p>
          </div>
        </div>
      </div>
      <div class="control mx-5 my-4">
        <div class="filed">
          <input 
            class="input is-transparent transparent-input p-5 box-shadow" 
            bind:value={answer_input} 
            type="number" 
            placeholder="Write your answer"
            disabled={!$is_game_start}
            >
        </div>
      </div>
      <div class="control mx-5 my-4">
        <button class="button is-fullwidth is-info is-dark has-text-white button-shadow" onclick={nextQuestion} disabled={!$is_game_start}> 
          ⏭️ Next
        </button>
      </div>
      <div class="control mx-5 my-4">
        <button class="button is-fullwidth is-danger is-dark has-text-white button-shadow" onclick={resetQuiz} disabled={!$is_game_start}> 
          ♻️ Reset
        </button>
      </div>
    </div>
  </div>
</div>

<style>
   .button-shadow {
    box-shadow: 0 9px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }
  .button-shadow:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  }
  .transparent-input {
    background-color: rgb(243, 230, 166) !important;
    border: 2px solid rgba(255, 255, 255, 0.6);;
    border-radius: 10px;
    transition: all 0.3s ease;
    color: #000;
  }

  .transparent-input::placeholder {
    color: black;
    opacity: 0.5;
    font-weight: 400;
    font-size: 15px;
  }

  /* Hide number input arrows in Webkit browsers */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide number input arrows in Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }


  .box-shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 6px 16px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }

  .box-shadow:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.15);
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { difficulty, questions, user_answers, is_game_start, is_game_end, time, time_taken, score, correct, wrong, total } from '$lib/utils/stores';
  import { goto } from '$app/navigation';
  import { formatTime } from '$lib/utils/utils';
  import { generateQuestions } from '$lib/utils/quiz';

  
  let current_question_index = 0;
  let current_question = '';
  let answer_input = '';
  let timer_interval;
  let is_paused = false;

  $: if ($questions.length) {
    current_question = $questions[current_question_index]?.question;
  }

  function pauseQuiz() {
    is_paused = true;
    clearInterval(timer_interval);
  }

  function startQuiz() {
    if (!$is_game_start) {
      time.set(0);
    }
    is_game_start.set(true);
    is_paused = false;
    startTimer();
  }

  function startTimer() {
  clearInterval(timer_interval);

  timer_interval = setInterval(() => {
    if (!is_paused) {
      time.update(n => n + 1);
    }
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
    goto('/').then(() => {
      location.reload();
    });
  }

  onMount(() => {
    generateQuestions($difficulty); 
    clearInterval(timerInterval);
  });
</script>
