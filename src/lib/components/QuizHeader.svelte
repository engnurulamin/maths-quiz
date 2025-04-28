<script>
	import { is_game_start, is_game_end, time, is_game_pause } from '$lib/utils/stores';
	import { formatTime } from '$lib/utils/utils';

	let timer_interval;
	export let icon;
	export let name;

	function pauseQuiz() {
		is_game_pause.set(true);
		clearInterval(timer_interval);
	}

	function startQuiz() {
		if (!$is_game_start) {
			time.set(0);
		}
		is_game_start.set(true);
		is_game_pause.set(false);
		startTimer();
	}

	function startTimer() {
		clearInterval(timer_interval);

		timer_interval = setInterval(() => {
			if (!$is_game_pause) {
				time.update((n) => n + 1);
			}
		}, 1000);
	}

	$: if ($is_game_end) {
		clearInterval(timer_interval);
	}
</script>

<h1 class="p-4">
	<button class="button is-large px-6 is-warning is-light button-shadow">{icon} {name}</button>
</h1>
{#if $is_game_start}
	<button
		class="button is-small is-primary is-light"
		onclick={() => ($is_game_pause ? startQuiz() : pauseQuiz())}
	>
		{$is_game_pause ? 'Resume' : 'Pause'}
	</button>
{:else}
	<button class="button is-small is-primary is-light" onclick={startQuiz}> Start Quiz </button>
{/if}
<h2 class="has-text-white has-text-weight-semibold has-text-centered title is-4 mt-2">
	<i class="fa-regular fa-clock mr-1"></i>
	{formatTime($time)}
</h2>
