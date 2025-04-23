<div class="columns">
  <div class="column">
    <div class="card has-background-warning m-4 p-4">
      <h1 class="has-text-white has-text-weight-bold has-text-centered py-6 title is-2">
        <i class="fa-regular fa-clock mr-2"></i> 200s
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
  import { difficulty, questions, user_answers, is_game_start, time, score, correct, wrong, total } from '../../lib/stores';
  import { goto } from '$app/navigation';

  
  let currentQuestionIndex = 0;
  let currentQuestion = '';
  let answerInput = '';

  $: if ($questions.length) {
    currentQuestion = $questions[currentQuestionIndex]?.question;
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
    is_game_start.set(true);
  });
</script>
