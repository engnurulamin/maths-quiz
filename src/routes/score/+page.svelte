<div class="columns">
  <div class="column">
    <div class="card has-background-warning m-4 p-2">
      <div class="box has-background-warning-light m-4">
        <p class="has-text-black has-text-weight-bold has-text-centered is-size-3-desktop is-size-4-tablet is-size-5-mobile">
          {#if $user_name}
          <span class="animated-emoji">{random_emojies}</span>
          {/if}
           Congratulations
        </p>
        <p class="has-text-success has-text-weight-semibold has-text-centered is-size-3-desktop is-size-5-tablet is-size-5-mobile">
          {$user_name} 
          {#if $user_name}
            <span class="animated-emoji">{random_emoji}</span>
          {/if}
        </p>
        <p class="has-text-centered has-text-link is-size-4-tablet is-size-6-mobile">
          {#if $user_name}
            {message}
          {/if}
        </p>
      </div>

      <div class="columns">
        <div class="column">
          <div class="box has-background-warning-light mx-4">
            <p class="has-text-black has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile">
              ⏱️ You took: <span class="has-text-weight-semibold has-text-info">{formatTime($time_taken)}</span>
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box has-background-warning-light mx-4">
            <p class="has-text-black has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile">
              🏆 Your score is: <span class="has-text-weight-semibold has-text-primary">{$correct}/{$total}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="box has-background-warning-light mx-4">
            <p class="has-text-black has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile">
              ✅ Total correct answers: <span class="has-text-weight-bold has-text-success">{$correct}</span>
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box has-background-warning-light mx-4">
            <p class="has-text-black has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile">
              ❌ Total wrong answers: <span class="has-text-weight-bold has-text-danger">{$wrong}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="box has-background-warning-light mx-4">
            <p class="has-text-black has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile">
              🎯 Total attempts: <span class="has-text-weight-bold has-text-success">{$total}</span>
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box has-background-warning-light mx-4">
            <p class="has-text-black has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile">
              📊 Accuracy: <span class="has-text-weight-bold has-text-link">{$accuracy || 0}%</span>
            </p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column mx-4 mb-3">
          <div class="control">
          <div class="field">
              <button class="button is-primary is-dark is-fullwidth has-text-white is-size-4-desktop is-size-6-tablet is-size-6-mobile" onclick={()=>{goto('/').then(() => {
                location.reload();
              })}}>
                🔁 Play Again
              </button>
            </div>
          </div> 
        </div>
      </div>

    </div>
  </div>
</div>

<style>
	.animated-emoji {
		display: inline-block;
		animation: bounce 1s infinite;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-8px); }
	}
</style>

<script>
	import { formatTime } from '$lib/utils';
  import { user_name, correct, wrong, total, time_taken, accuracy } from '$lib/stores';
  import { getMotivationalMessage } from '$lib/utils';
  import { goto } from '$app/navigation';

	total.set($correct + $wrong);

	accuracy.set(Math.round(($correct / $total) * 100));

	const emojis = ['🎉', '🏆', '🎯', '⭐', '🌟', '🧁', '🍭', '🎈', '🚀', '💥'];
	const random_emojies = emojis[Math.floor(Math.random() * emojis.length)];
	const random_emoji = emojis[Math.floor(Math.random() * emojis.length -1)];

	$: message = getMotivationalMessage($accuracy);
</script>