<div class="columns">
  <div class="column has-text-centered">
    <div class="card m-4 p-2 has-background-warning">
      <div class="control">
        <div class="field p-4">
          <h1 class="">Welcome to the QuizNest {randomEmoji}</h1>
          <h3 class="has-text-white">What would you like to learn today?</h3>
        </div>
      </div>
      <hr class="is-paddingless has-background-warning-light p-0 m-0">
      <div class="field p-4">
        <label class="label has-text-white is-size-5">Select a subject</label>
        <div class="control mt-2">
          <div class="buttons is-centered">
            <a href="/math" class="button is-primary is-light is-fullwidth">
              📊 Math
            </a>
            <a href="/english" class="button is-link is-light is-fullwidth">
              📖 English
            </a>
          </div>          
        </div>
      </div>
      <hr class="is-paddingless has-background-warning-light p-0 m-0">
      <div class="control mx-5 my-2">
        <label class="label has-text-white is-size-5">Enter your name</label>
        <div class="filed my-4">
          <input class="input is-transparent transparent-input" type="text" placeholder="Enter your name" bind:value={$user_name}>
        </div>
      </div>
      <hr class="is-paddingless has-background-warning-light p-0 m-0">
      <div class="control mx-5 my-4">
       <div class="field">
        <div class="columns">
          <div class="column is-clickable { !$user_name ? 'disabled' : '' }" onclick={() => $user_name && difficultyClick('easy')}>
            <div class="card py-1 has-background-info-dark {$difficulty === 'easy' ? 'selected' : ''}">
              <span class="type is-size-5">🟢 Easy</span>
            </div>
          </div>
          <div class="column is-clickable { !$user_name ? 'disabled' : '' }" onclick={() => $user_name && difficultyClick('medium')}>
            <div class="card py-1 has-background-primary-dark {$difficulty === 'medium' ? 'selected' : ''}">
              <span class="type is-size-5">🧩 Medium</span>
            </div>
          </div>
          <div class="column is-clickable { !$user_name ? 'disabled' : '' }" onclick={() => $user_name && difficultyClick('hard')}>
            <div class="card py-1 has-background-danger-dark {$difficulty === 'hard' ? 'selected' : ''}">
              <span class="type is-size-5">🧠Hard</span>
            </div>
          </div>
        </div>
       </div>
      </div> 
      <hr class="is-paddingless has-background-warning-light p-0 m-0">
      <div class="control mx-5 my-4">
        <button 
          class="button is-fullwidth is-success-dark" 
          disabled={!$user_name || !$difficulty} 
          onclick={() => goto('/quiz')}>
          <i class="fa-regular fa-clock mr-2"></i> Start Quiz
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    font-weight: bolder;
    font-size: 30px;
    color: white;
  }

  .transparent-input {
    background-color: rgb(243, 230, 166) !important;
    border: 2px solid rgba(56, 3, 3, 0.796);
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

  .transparent-input:focus,
  .transparent-input:active {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6); 
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
  }
  .disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed !important;
  }
  .type {
    color: white;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 1.3px;
  }

  .selected {
		border: 3px solid rgb(209, 201, 201);
		transform: scale(1.05);
	}

  @media (max-width: 768px) {
    h1 {
    font-size: 22px;
   }
  }
</style>
<script>
  import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { user_name, difficulty } from '$lib/stores';


	let emojis = [
		"📚", "✏️", "🧠", "🏫"
	];

	let randomEmoji = "";

	onMount(() => {
		updateEmoji();
		const interval = setInterval(updateEmoji, 2000); 
		return () => clearInterval(interval);
	});

	function updateEmoji() {
		randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
	}

  function difficultyClick(type) {
		difficulty.set(type);
	}
</script>

