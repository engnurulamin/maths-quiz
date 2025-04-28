<div class="column is-clickable { !$user_name ? 'disabled' : '' }" onclick={() => $user_name && difficultyClick('easy')}>
  <div class="card py-1 has-background-info-dark {$difficulty === 'easy' ? 'selected' : ''} card-shadow">
    <span class="type is-size-5">🟢 Easy</span>
  </div>
</div>
<div class="column is-clickable { !$user_name ? 'disabled' : '' } " onclick={() => $user_name && difficultyClick('medium')}>
  <div class="card py-1 has-background-primary-dark {$difficulty === 'medium' ? 'selected' : ''} card-shadow">
    <span class="type is-size-5">🧩 Medium</span>
  </div>
</div>
<div class="column is-clickable { !$user_name ? 'disabled' : '' }" onclick={() => $user_name && difficultyClick('hard')}>
  <div class="card py-1 has-background-danger-dark {$difficulty === 'hard' ? 'selected' : ''} card-shadow">
    <span class="type is-size-5">🧠Hard</span>
  </div>
</div>

<style>
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

  .card-shadow {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
  }

  .card-shadow:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3), 0 16px 32px rgba(0, 0, 0, 0.2);
  }
</style>

<script>
  import { user_name, difficulty } from '$lib/utils/stores';
  import { goto } from '$app/navigation';

  function difficultyClick(type) {
		difficulty.set(type);
	}
</script>