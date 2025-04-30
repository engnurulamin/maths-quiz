<script>
	import { onMount } from 'svelte';
	import {
		difficulty,
		questions,
		user_answers,
		is_game_start,
		is_game_end,
		is_game_pause,
		time,
		time_taken,
		score,
		correct,
		wrong,
		total,
		question_type
	} from '$lib/utils/stores';
	import { goto } from '$app/navigation';
	import { formatTime } from '$lib/utils/utils';
	import { generateQuestions } from '$lib/utils/quiz';
	import QuizHeader from '$lib/components/QuizHeader.svelte';
	import { spelling } from '$lib/utils/data';

	let current_question_index = 0;
	let current_question = '';
	let answer_input = '';
	let timer_interval;
	let status = '';

	$: if ($questions.length) {
		current_question = $questions[current_question_index]?.question;
	}

	function nextQuestion() {
		const current_correct_answer = $questions[current_question_index]?.answer;
		if (parseInt(answer_input) === current_correct_answer) {
			correct.update((n) => n + 1);
			status = 'correct';
		} else {
			wrong.update((n) => n + 1);
			status = 'wrong';
		}
		user_answers.update((ans) => [...ans, answer_input]);
		answer_input = '';

		if (current_question_index < $questions.length - 1) {
			current_question_index += 1;
		} else {
			is_game_start.set(false);
			time_taken.set($time);
			goto('/score');
		}
	}

	function resetQuiz() {
		current_question_index = 0;
		current_question = '';
		answer_input = '';
		correct.set(0);
		wrong.set(0);
		score.set(0);
		user_answers.set([]);
		is_game_start.set(false);
		goto('/').then(() => {
			location.reload();
		});
	}

	onMount(() => {
		generateQuestions($difficulty);
		clearInterval(timerInterval);
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
								of <strong class="has-text-weight-bold has-text-dark">'Development'?</strong>
							</p>
						{/if}
						{#if $question_type === 'Spelling'}
							<p class="has-text-weight-semibold has-text-dark is-size-4 mt-4">
								Write the spelling of this image <br />
								<span class="is-size-1">🍎</span>
							</p>
							<div class="control my-4">
								<div class="filed">
									<input
										class="input is-transparent transparent-input p-5 box-shadow"
										type="text"
										placeholder="Write the spelling"
										required
									/>
								</div>
							</div>
						{/if}
						{#if $question_type !== 'Spelling'}
							<ul>
								<div class="columns is-multiline is-mobile mt-3">
									<div class="column is-half">
										<li class="is-size-5 has-text-weight-semibold has-text-dark">
											<i class="fa-solid fa-circle-check has-text-success"></i> A small
										</li>
									</div>
									<div class="column is-half">
										<li class="is-size-5 has-text-weight-semibold has-text-dark">
											<i class="fa-regular fa-circle"></i>
											A small
										</li>
									</div>
									<div class="column is-half">
										<li class="is-size-5 has-text-weight-semibold has-text-dark">
											<i class="fa-regular fa-circle"></i> A small
										</li>
									</div>
									<div class="column is-half">
										<li class="is-size-5 has-text-weight-semibold has-text-dark">
											<i class="fa-regular fa-circle"></i> A small
										</li>
									</div>
								</div>
							</ul>
						{/if}
					</div>
					{#if status === 'correct'}
						<p class="has-text-success is-size-5">✅ Correct! Geat job!</p>
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
					disabled={!$is_game_start}
				>
					⏭️ Next
				</button>
			</div>
			<div class="control mx-3 my-4">
				<button
					class="button is-fullwidth is-danger is-dark has-text-white button-shadow"
					onclick={resetQuiz}
					disabled={!$is_game_start}
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
</style>
