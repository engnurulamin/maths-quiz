<div class="columns">
  <div class="column has-text-centered">
    <div class="card m-4 p-4 has-background-warning">
      <h1>Fun with Maths{randomEmoji}</h1>
      <div class="control mx-4 my-6">
        <div class="filed">
          <input class="input is-medium is-transparent transparent-input" type="text" placeholder="Enter your name" bind:value={$user_name}>
        </div>
      </div>
      <div class="control mx-4 my-6">
       <div class="field">
        <div class="columns">
          <div class="column p-4 is-clickable" onclick={() => difficultyClick('easy')} role="button" aria-label="Easy mode" disabled={!$user_name}>
            <div class="card py-6 has-background-info-dark {$difficulty === 'easy' ? 'selected' : ''}">
              <span class="type">Easy</span>
            </div>
          </div>
          <div class="column p-4 is-clickable" onclick={() => difficultyClick('medium')} role="button" aria-label="Medium mode" disabled={!$user_name}>
            <div class="card py-6 has-background-primary-dark {$difficulty === 'medium' ? 'selected' : ''}">
              <span class="type">Medium</span>
            </div>
          </div>
          <div class="column p-4 is-clickable" onclick={() => difficultyClick('hard')} role="button" aria-label="Hard mode" disabled={!$user_name}>
            <div class="card  py-6 has-background-danger-dark {$difficulty === 'hard' ? 'selected' : ''}">
              <span class="type">Hard</span>
            </div>
          </div>
        </div>
       </div>
      </div> 
      <p class="has-text-dark is-size-5">
        {#if $user_name}
          Your name is: <span class="has-text-success">{$user_name}</span>
        {/if}
      </p>
      
      <p class="has-text-dark is-size-6">
        {#if $difficulty}
          You are going to play on 
          <span class="has-text-weight-bold has-text-success-light">
            {$difficulty.toUpperCase()}
          </span> mode
        {/if}
      </p>
      
      <div class="control mx-4 mt-6 mb-4">
        <a href="/quiz" class="button is-medium is-rounded is-fullwidth is-success-dark py-3"> 
          <i class="fa-regular fa-clock mr-2"></i> Start Quiz
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    letter-spacing: 2.5px;
    font-weight: bolder;
    font-size: 70px;
    color: rgb(58, 3, 87);
  }

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
    font-size: 50px;
   }
  }
</style>
<script>
	import { onMount } from 'svelte';
	import { user_name, difficulty } from '../lib/stores';


	let funEmojis = [
		"🎉", "🎈", "🧁", "🍭", "🍬", "⭐", "🌟", "🪄",
		"🚀",  "👑", "💎","🎀", "💖", "🔥", "💥"
	];

	let randomEmoji = "";

	onMount(() => {
		updateEmoji();
		const interval = setInterval(updateEmoji, 2000); 
		return () => clearInterval(interval);
	});

	function updateEmoji() {
		randomEmoji = funEmojis[Math.floor(Math.random() * funEmojis.length)];
	}

  function difficultyClick(type) {
		difficulty.set(type);
	}
</script>

