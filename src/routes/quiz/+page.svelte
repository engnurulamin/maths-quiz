<div class="columns">
  <div class="column">
    <div class="card has-background-warning m-4 p-4">
      <h1 class="has-text-white has-text-weight-bold has-text-centered py-6 title is-2">
        <i class="fa-regular fa-clock mr-2"></i> {formatTime($time)}
        {#if $is_game_start}
          <button class="button is-primary is-light is-pulled-right mt-2 mr-5" onclick={() => {is_paused ? startQuiz() : pauseQuiz()}}>
            {is_paused ? 'Resume' : 'Pause'}
          </button>
        {/if}
        {#if !$is_game_start}
          <button class="button is-primary is-light is-pulled-right mt-2 mr-5" onclick={startQuiz}>
            Start Quiz
          </button>
        {/if}
      </h1>
      
      

      <div class="control mx-4 my-6">
        <div class="filed">
          <div class="box has-background-warning-light p-4  has-text-centered">
            <p class="has-text-dark is-size-1 has-text-weight-bold">{currentQuestion || '80 + 50 = ?'}</p>
          </div>
        </div>
      </div>
      <div class="control mx-4 my-6">
        <div class="filed">
          <input class="input is-medium is-transparent transparent-input" bind:value={answerInput} type="text" placeholder="Write your answer">
        </div>
      </div>
      <div class="control mx-4 mt-6 mb-4">
        <button class="button is-medium is-rounded is-fullwidth is-info-dark py-4" onclick={nextQuestion}> 
           Next
        </button>
      </div>
      <div class="control mx-4 mt-6 mb-4">
        <button class="button is-medium is-rounded is-fullwidth is-danger py-4" onclick={resetQuiz}> 
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
  import { difficulty, questions, user_answers, is_game_start, is_game_end, time, time_taken, score, correct, wrong, total } from '../../lib/stores';
  import { goto } from '$app/navigation';
  import { formatTime } from '../../lib/utils';

  
  let currentQuestionIndex = 0;
  let currentQuestion = '';
  let answerInput = '';
  let timerInterval;
  let is_paused = false;

  $: if ($questions.length) {
    currentQuestion = $questions[currentQuestionIndex]?.question;
  }

  function startQuiz() {
    is_game_start.set(true);
    is_paused = false;
    

    timerInterval = setInterval(() => {
      if (!is_paused) {
        time.update(t => t + 1);
      }
    }, 1000);
  }

  function pauseQuiz() {
    is_paused = true;
    clearInterval(timerInterval);
  }
 
  $: if ($is_game_start && !$is_game_end) {
    startTimer();
  }

  function startTimer() {
    time.set(0); 
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      time.update(n => n + 1);
    }, 1000);
  }

  $: if ($is_game_end) {
  clearInterval(timerInterval);
}

  function nextQuestion() {
    const currentCorrectAnswer = $questions[currentQuestionIndex]?.answer;

    if (parseInt(answerInput) === currentCorrectAnswer) {
      correct.update(n => n + 1);
    } else {
      wrong.update(n => n + 1);
    }

    user_answers.update(ans => [...ans, answerInput]);
    answerInput = '';

    if (currentQuestionIndex < $questions.length - 1) {
      currentQuestionIndex += 1;
    } else {
      is_game_start.set(false);
      time_taken.set($time);
      goto('/score');
    }
  }

  function resetQuiz() {
    currentQuestionIndex = 0;
    currentQuestion = '';
    answerInput = '';
    correct.set(0);
    wrong.set(0);
    score.set(0);
    user_answers.set([]);
    is_game_start.set(false);
    goto('/');
  }

  function generateQuestions(level) {
    let generated = [];

    for (let i = 0; i < 10; i++) {
      let a, b, question, answer;

      if (level === 'easy') {
        a = Math.floor(Math.random() * 10);
        b = Math.floor(Math.random() * 10);
        question = `${a} + ${b}`;
        answer = a + b;
      } else if (level === 'medium') {
        a = Math.floor(Math.random() * 90) + 10;
        b = Math.floor(Math.random() * 9) + 1;
        const type = Math.random() > 0.5 ? '×' : '÷';
        if (type === '×') {
          question = `${a} × ${b}`;
          answer = a * b;
        } else {
          question = `${a} ÷ ${b}`;
          answer = Math.floor(a / b); 
        }
      } else {
        a = Math.floor(Math.random() * 900) + 100;
        b = Math.floor(Math.random() * 90) + 10;
        question = `${a} ÷ ${b}`;
        answer = Math.floor(a / b);
      }

      generated.push({ question, answer });
    }

    questions.set(generated);
    total.set(generated.length);
  }

  onMount(() => {
    generateQuestions($difficulty); 
    clearInterval(timerInterval);
  });
</script>
