<div class="columns">
  <div class="column has-text-centered">
    <div class="card m-4 p-2 has-background-warning">
      <div class="control">
        <p class="field">
          <h1>Fun with Maths{randomEmoji}</h1>
      <p class="has-text-dark is-size-5 mt-1">
        {#if $user_name}
        Your name is: <span class="has-text-success">{$user_name}</span>
        {/if}
      </p>
      
      <p class="has-text-dark is-size-7 mt-1">
        {#if $difficulty}
        You are going to play on 
        <span class="has-text-weight-bold has-text-success-light is-size-6">
          {$difficulty.toUpperCase()}
        </span> mode
        {/if}
      </p>
      </div>
      
      <div class="control mx-5">
        <div class="filed my-5">
          <input class="input p-4 is-transparent transparent-input" type="text" placeholder="Enter your name" bind:value={$user_name}>
        </div>
      </div>
    
      <div class="control mx-5">
       <div class="field">
        <div class="columns">
          <div class="column is-clickable { !$user_name ? 'disabled' : '' }" onclick={() => $user_name && difficultyClick('easy')}>
            <div class="card py-1 has-background-info-dark {$difficulty === 'easy' ? 'selected' : ''}">
              <span class="type is-size-5">Easy</span>
            </div>
          </div>
          <div class="column is-clickable { !$user_name ? 'disabled' : '' }" onclick={() => $user_name && difficultyClick('medium')}>
            <div class="card py-1 has-background-primary-dark {$difficulty === 'medium' ? 'selected' : ''}">
              <span class="type is-size-5">Medium</span>
            </div>
          </div>
          <div class="column is-clickable { !$user_name ? 'disabled' : '' }" onclick={() => $user_name && difficultyClick('hard')}>
            <div class="card py-1 has-background-danger-dark {$difficulty === 'hard' ? 'selected' : ''}">
              <span class="type is-size-5">Hard</span>
            </div>
          </div>
        </div>
       </div>
      </div> 
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
    letter-spacing: 2.5px;
    font-weight: bolder;
    font-size: 50px;
    color: rgb(58, 3, 87);
  }

  .transparent-input {
    background-color: rgb(243, 230, 166) !important;
    border: 2px solid rgba(56, 3, 3, 0.796);
    padding: 0.75rem 1.5rem;
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
    font-size: 30px;
   }
  }
</style>
<script>
  import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { user_name, difficulty } from '$lib/stores';


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

