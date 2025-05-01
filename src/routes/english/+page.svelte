<script>
	import { onMount } from 'svelte';
	import {
		questions,
		selected_option,
		time,
		time_taken,
		score,
		correct,
		wrong,
		total,
		question_type,
		is_game_start,
		is_game_pause
	} from '$lib/utils/stores';
	import { goto } from '$app/navigation';
	import { formatTime, shuffleItems, renderType } from '$lib/utils/utils';
	import QuizHeader from '$lib/components/QuizHeader.svelte';
	import { get } from 'svelte/store';

	let current_question_index = 0;
	let current_question = '';
	let answer_input = '';
	let timer_interval;
	let status = '';
	let selected = '';
	let has_answered = false;

	// $: if ($questions.length) {
	// 	current_question = $questions[current_question_index]?.question;
	// }

	function handleOptionClick(option) {
		if (has_answered) return;

		selected = option;
		has_answered = true;
		selected_option.set(option);

		const correctAnswer = $questions[current_question_index]?.answer;
		if (option === correctAnswer) {
			correct.update((n) => n + 1);
			status = 'correct';
		} else {
			wrong.update((n) => n + 1);
			status = 'wrong';
		}
	}

	function nextQuestion() {
		if (!has_answered) return;
		if (current_question_index < $questions.length - 1) {
			current_question_index += 1;
			selected_option.set('');
			selected = '';
			answer_input = '';
			has_answered = false;
			status = '';
		} else {
			is_game_start.set(false);
			time_taken.set($time);
			clearInterval(timer_interval);
			goto('/score');
		}
	}

	function spellingAnswer() {
		const current = $questions[current_question_index];
		const userAnswer = answer_input.toLowerCase().trim();
		const correctAnswer = current?.word.toLowerCase().trim();

		if (userAnswer === correctAnswer) {
			correct.update((n) => n + 1);
			status = 'correct';
		} else {
			wrong.update((n) => n + 1);
			status = 'wrong';
		}
		has_answered = true;
	}

	$: if ($question_type) {
		clearInterval(timer_interval);
		const data_type = renderType($question_type);
		const shuffled = shuffleItems(data_type);
		questions.set(shuffled);
		current_question_index = 0;
		selected_option.set('');
	}

	onMount(() => {
		clearInterval(timer_interval);
	});
</script>

<div class="columns">
	<div class="column">
		<div class="card has-background-warning has-text-centered m-4 p-2">
			<QuizHeader icon="📖" name="English" />
			<div class="control mx-3">
				<div class="filed">
					<div class="box has-background-warning-light has-text-centered button-shadow">
						<h3 class="is-size-3 has-text-dark has-text-weight-bold">
							📖Word {$question_type || 'Word Meaning'}
						</h3>
						<hr class="is-paddingless p-0 my-1 mx-3" />
						{#if $question_type !== 'Spelling'}
							<p class="has-text-weight-semibold has-text-dark is-size-4 mt-4">
								What is the <span class="is-lowercase">{$question_type}</span>
								of
								<strong class="has-text-weight-bold has-text-dark"
									>'{$questions[current_question_index]?.word}'?</strong
								>
							</p>
						{/if}
						{#if $question_type === 'Spelling'}
							<p class="has-text-weight-semibold has-text-dark is-size-4 mt-4">
								Write the spelling of this image: <br />
								<span class="has-text-weight-bold" style="font-size: 100px;"
									>{$questions[current_question_index]?.image}</span
								>
							</p>
							<div class="control my-4">
								<div class="filed">
									<input
										class="input is-transparent transparent-input p-5 box-shadow"
										type="text"
										bind:value={answer_input}
										disabled={!$is_game_start || $is_game_pause}
										placeholder="Write the spelling"
										required
									/>
								</div>
							</div>
							<div class="control">
								<div class="filed">
									<button
										class="button is-warning is-light is-fullwidth p-3 box-shadow"
										disabled={answer_input === '' ||
											has_answered ||
											!$is_game_start ||
											$is_game_pause}
										onclick={spellingAnswer}
									>
										📝 Submit</button
									>
								</div>
							</div>
						{/if}
						{#if $question_type !== 'Spelling'}
							<div class="options-grid mt-2">
								{#each $questions[current_question_index]?.options as option, i}
									<div
										class="option-box {!$is_game_start || $is_game_pause ? 'disabled' : ''}"
										onclick={() => handleOptionClick(option)}
									>
										{#if selected === option}
											<i class="fa-solid fa-circle-check has-text-success"></i>
										{:else}
											<i class="fa-regular fa-circle has-text-dark"></i>
										{/if}
										<span class="has-text-weight-semibold has-text-dark">{option}</span>
									</div>
								{/each}
							</div>
						{/if}
					</div>
					{#if status === 'correct'}
						<p class="has-text-success is-size-5">✅ Correct! Great job!</p>
					{:else if status === 'wrong'}
						<p class="has-text-danger is-size-5">
							<span style="font-size: 1rem;">❌</span> Wrong! Try the next one!
						</p>
					{/if}
				</div>
			</div>
			<div class="control mx-3 my-4">
				<button
					class="button is-fullwidth is-info is-dark has-text-white button-shadow"
					onclick={nextQuestion}
					disabled={!has_answered}
				>
					⏭️ Next
				</button>
			</div>
			<div class="control mx-3 my-4">
				<button
					class="button is-fullwidth is-danger is-dark has-text-white button-shadow"
					onclick={() => (window.location.href = '/')}
				>
					♻️ Reset
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.button-shadow {
		box-shadow: 0 5px 5px rgb(127, 125, 125);
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
	.box-shadow {
		box-shadow:
			0 4px 8px rgba(0, 0, 0, 0.15),
			0 6px 16px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s ease-in-out;
	}

	.box-shadow:hover {
		box-shadow:
			0 8px 16px rgba(0, 0, 0, 0.2),
			0 12px 24px rgba(0, 0, 0, 0.15);
	}

	.disabled {
		opacity: 0.5;
		pointer-events: none !important;
		cursor: not-allowed !important;
	}
	.options-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	.option-box {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0.8rem;
		border-radius: 0.5rem;
		background-color: transparent;
		cursor: pointer;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		font-weight: 600;
		font-size: 1.1rem;
		transition:
			background 0.3s,
			transform 0.2s;
	}

	.option-box:hover {
		background-color: #f8de9b;
		transform: scale(1.005);
	}

	.option-box i {
		margin-right: 0.5rem;
	}

	.option-box.disabled {
		opacity: 0.5;
		pointer-events: none;
		cursor: not-allowed;
	}
</style>
