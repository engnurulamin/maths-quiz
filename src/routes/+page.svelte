<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { user_name, difficulty, subject, question_type } from '$lib/utils/stores';
	import MathDifficulty from '$lib/components/MathDifficulty.svelte';
	import EnglishQType from '$lib/components/EnglishQType.svelte';

	let emojis = ['📚', '✏️', '🧠', '🏫'];

	let randomEmoji = '';

	onMount(() => {
		updateEmoji();
		const interval = setInterval(updateEmoji, 2000);
		return () => clearInterval(interval);
	});

	function updateEmoji() {
		randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
	}

	function subjectClick(type) {
		subject.set(type);
	}
</script>

<div class="columns">
	<div class="column has-text-centered">
		<div class="card m-4 p-2 has-background-warning">
			<div class="control">
				<div class="field p-4">
					<h1>Welcome to the QuizNest {randomEmoji}</h1>
					<h3 class="has-text-dark has-text-weight-light">What would you like to learn today?</h3>
				</div>
			</div>
			<hr class="is-paddingless has-background-warning-light p-0 m-0" />
			<div class="field p-4">
				<label class="label has-text-white is-size-5">Select a subject</label>
				<div class="control mt-2">
					<div class="buttons is-centered">
						<button
							class="button is-primary is-light is-fullwidth button-shadow {$subject === 'math'
								? 'selected'
								: ''}"
							onclick={() => subjectClick('math')}
						>
							📊 Math
						</button>
						<button
							class="button is-link is-light is-fullwidth button-shadow {$subject === 'english'
								? 'selected'
								: ''}"
							onclick={() => subjectClick('english')}
						>
							📖 English
						</button>
					</div>
				</div>
			</div>
			<hr class="is-paddingless has-background-warning-light p-0 m-0" />
			<div class="control mx-5 my-2">
				<label class="label has-text-white is-size-5">Enter your name</label>
				<div class="filed mb-4 mt-2">
					<input
						class="input is-transparent transparent-input button-shadow"
						type="text"
						disabled={!$subject}
						placeholder="Enter your name"
						bind:value={$user_name}
						required
					/>
				</div>
			</div>
			<hr class="is-paddingless has-background-warning-light p-0 m-0" />

			{#if $subject === 'math'}
				<MathDifficulty />
			{/if}
			{#if $subject === 'english'}
				<EnglishQType />
			{/if}

			<div class="control mx-5 my-4">
				<button
					class="button is-fullwidth is-success-dark button-shadow"
					disabled={!$difficulty && !$question_type}
					onclick={$subject === 'english' ? () => goto('/english') : () => goto('/math')}
				>
					<i class="fa-solid fa-book mr-2"></i> Start Quiz
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		font-weight: bolder;
		font-size: 30px;
		color: black;
	}

	.button-shadow {
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
		transition: box-shadow 0.3s ease;
	}
	.button-shadow:hover {
		box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
	}
	.transparent-input {
		background-color: rgb(243, 230, 166) !important;
		border: 2px solid rgba(255, 255, 255, 0.6);
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
		border-color: rgba(33, 19, 43, 0.259);
		box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
	}

	.selected {
		border: 1px solid grey;
		transform: scale(1);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 25px;
			font-weight: 300;
		}
	}
</style>
