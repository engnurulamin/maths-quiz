<script>
	import {
		english_letters,
		arabic_letters,
		english_numbers,
		bangla_numbers,
		vowels,
		consonents
	} from '$lib/utils/kidz/data';

	let show_bangla = false;
	let show_numbers = false;
	let current_language = 'en-US';
	let data = english_letters;

	function speak(text, lang) {
		let voices = speechSynthesis.getVoices();
		if (!voices.length) {
			speechSynthesis.onvoiceschanged = () => speak(text, lang);
			return;
		}

		let voice = voices.find((v) => v.lang === lang);

		if (!voice && lang === 'bn-BD') {
			voice = voices.find((v) => v.lang.includes('en-IN'));
		}
		if (!voice && lang === 'ar-SA') {
			voice = voices.find((v) => v.lang.includes('ar'));
		}

		const utterance = new SpeechSynthesisUtterance(text);
		utterance.lang = voice?.lang || lang;
		utterance.voice = voice;

		speechSynthesis.cancel();
		speechSynthesis.speak(utterance);
	}

	function handlerClick(type) {
		switch (type) {
			case 'english':
				current_language = 'en-US';
				data = english_letters;
				break;
			case 'arabic':
				current_language = 'ar-SA';
				data = arabic_letters;
				break;
			case 'en-numbers':
				current_language = 'en-US';
				data = english_numbers;
				break;
			case 'bd-numbers':
				current_language = 'bn-BD';
				data = bangla_numbers;
				break;
			case 'vowel':
				current_language = 'bn-BD';
				data = vowels;
				break;
			case 'consonant':
				current_language = 'bn-BD';
				data = consonents;
				break;
		}
	}
</script>

<div class="columns">
	<div class="column">
		<div class="card has-background-warning has-text-centered m-4 p-4">
			<h2
				class="has-text-white has-text-weight-semibold is-size-3-desktop is-size-4-tablet is-size-5-mobile pt-0 pb-3"
			>
				Learn letters and numbers
			</h2>
			<hr class="is-paddingless has-background-warning-light pt-0 mt-0" />
			<div class="columns">
				<div class="column p-0 m-0">
					<div class="control">
						<div class="field m-4">
							<button
								class="button is-fullwidth is-primary is-dark button-shadow"
								onclick={() => handlerClick('arabic')}
							>
								<figure class="image is-24x24">
									<img src="/icons/religious.png" alt="" />
								</figure>
								<span class="is-size-5 has-text-white ml-2">Arabic</span>
							</button>
						</div>
					</div>
					<div class="control">
						<div class="field m-4 is-grouped is-grouped-multiline">
							{#if !show_bangla}
								<button
									class="button is-fullwidth is-info is-dark button-shadow"
									onclick={() => (show_bangla = !show_bangla)}
								>
									<figure class="image is-24x24">
										<img src="/icons/flag.png" alt="" />
									</figure>
									<span class="is-size-5 has-text-white ml-2">Bangla</span>
								</button>
							{/if}
							{#if show_bangla}
								<div class="control is-expanded">
									<button
										class="button is-info has-text-white is-dark is-fullwidth"
										onclick={() => handlerClick('vowel')}
									>
										অ আ ই ঈ
									</button>
								</div>
								<div class="control is-expanded">
									<button
										class="button is-link is-fullwidth"
										onclick={() => handlerClick('consonant')}
									>
										ক খ গ ঘ
									</button>
								</div>
							{/if}
						</div>
					</div>
				</div>
				<div class="column p-0 m-0">
					<div class="control">
						<div class="field m-4">
							<button
								class="button is-fullwidth is-danger is-dark button-shadow"
								onclick={() => handlerClick('english')}
							>
								<figure class="image is-24x24">
									<img src="/icons/language.png" alt="" />
								</figure>
								<span class="is-size-5 has-text-white ml-2">English</span>
							</button>
						</div>
					</div>
					<div class="control">
						<div class="field m-4 is-grouped is-grouped-multiline">
							{#if !show_numbers}
								<button
									class="button is-fullwidth is-success is-dark button-shadow"
									onclick={() => (show_numbers = !show_numbers)}
								>
									<figure class="image is-24x24">
										<img src="/icons/nums.png" alt="" />
									</figure>
									<span class="is-size-5 has-text-white ml-2">Numbers</span>
								</button>
							{/if}
							{#if show_numbers}
								<div class="control is-expanded">
									<button
										class="button is-success is-dark has-text-white is-fullwidth"
										onclick={() => {
											show_numbers = false;
											handlerClick('en-numbers');
										}}
									>
										1 2 3 4
									</button>
								</div>
								<div class="control is-expanded">
									<button
										class="button is-link is-dark is-fullwidth has-text-white"
										onclick={() => {
											show_numbers = true;
											handlerClick('bd-numbers');
										}}
									>
										১ ২ ৩ ৪
									</button>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
			<hr class="is-paddingless has-background-warning-light p-0 m-0" />
			<div
				class="grid mx-2 mt-5 mb-3"
				dir={current_language === 'ar-SA' ? 'rtl' : 'ltr'}
				style="direction: {current_language === 'ar-SA' ? 'rtl' : 'ltr'}"
			>
				{#each data as { letter, number, emoji, word }}
					<div
						class="letter-card"
						onclick={() =>
							speak(number ? `${number}` : `${letter || number} ${word || ''}`, current_language)}
					>
						<p class="letter">
							{letter || number}
						</p>
						<span class="emoji has-text-danger">{emoji}</span>
						<p class="word">{word}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.button-shadow {
		box-shadow: 0 9px 10px rgba(0, 0, 0, 0.2);
		transition: box-shadow 0.3s ease;
	}
	.button-shadow:hover {
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	.letter-card {
		background: #fff9db;
		border-radius: 0.75rem;
		text-align: center;
		padding: 1rem;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
		cursor: pointer;
	}

	.letter-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		border: 1px solid rgb(74, 72, 72);
	}

	.letter-card:active {
		transform: scale(0.98);
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}

	.letter {
		font-size: 3.8rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: #333;
		text-shadow:
			1px 1px 2px rgba(0, 0, 0, 0.12),
			2px 2px 3px rgba(0, 0, 0, 0.1),
			3px 3px 4px rgba(0, 0, 0, 0.08),
			4px 4px 5px rgba(0, 0, 0, 0.06),
			5px 5px 6px rgba(0, 0, 0, 0.05),
			6px 6px 7px rgba(0, 0, 0, 0.04),
			7px 7px 8px rgba(0, 0, 0, 0.03),
			8px 8px 9px rgba(0, 0, 0, 0.02),
			9px 9px 10px rgba(0, 0, 0, 0.01);
	}

	.letter-card:nth-child(4n + 1) .letter,
	.letter-card:nth-child(4n + 1) .word {
		color: #f22bdb;
	}

	.letter-card:nth-child(4n + 2) .letter,
	.letter-card:nth-child(4n + 2) .word {
		color: #1a73e8;
	}

	.letter-card:nth-child(4n + 3) .letter,
	.letter-card:nth-child(4n + 3) .word {
		color: #d93025;
	}

	.letter-card:nth-child(4n) .letter,
	.letter-card:nth-child(4n) .word {
		color: #f9ab00;
	}

	.word {
		font-size: 1.8rem;
		margin-top: 0.5rem;
	}

	.emoji {
		font-size: 4rem;
	}

	@media (max-width: 600px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 0.75rem;
		}

		.letter {
			font-size: 2.8rem;
			margin-bottom: 0.1rem;
		}

		.emoji {
			font-size: 3rem;
			margin-bottom: 0.1rem;
		}

		.word {
			font-size: 1.1rem;
			margin-top: 0;
		}

		.letter-card {
			padding: 0.35rem;
		}
	}
</style>
