<script>
	let show_bangla = false;
	let show_numbers = false;
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
							<button class="button is-fullwidth is-primary is-dark button-shadow">
								<figure class="image is-24x24">
									<img src="/icons/religious.png" alt="" />
								</figure>
								<span class="is-size-5 has-text-white ml-2">Arabic</span>
							</button>
						</div>
					</div>
					<div class="control">
						<div class="field m-4 is-grouped is-grouped-multiline">
							{#if show_bangla}
								<div class="control is-expanded">
									<button class="button is-info has-text-white is-dark is-fullwidth">Vowel</button>
								</div>
								<div class="control is-expanded">
									<button class="button is-link is-fullwidth">Consonant</button>
								</div>
							{/if}
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
						</div>
					</div>
				</div>
				<div class="column p-0 m-0">
					<div class="control">
						<div class="field m-4">
							<button class="button is-fullwidth is-danger is-dark button-shadow">
								<figure class="image is-24x24">
									<img src="/icons/language.png" alt="" />
								</figure>
								<span class="is-size-5 has-text-white ml-2">English</span>
							</button>
						</div>
					</div>
					<div class="control">
						<div class="field m-4 is-grouped is-grouped-multiline">
							{#if show_numbers}
								<div class="control is-expanded">
									<button class="button is-success is-dark has-text-white is-fullwidth">1234</button
									>
								</div>
								<div class="control is-expanded">
									<button class="button is-link is-dark is-fullwidth has-text-white">১২৩৪</button>
								</div>
							{/if}
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
						</div>
					</div>
				</div>
			</div>
			<hr class="is-paddingless has-background-warning-light p-0 m-0" />
			<div class="grid mx-2 mt-5 mb-3">
				<div class="letter-card">
					<p class="letter">A</p>
					<span class="emoji">🍎</span>
					<!-- Emoji instead of image -->
					<p class="word">Apple</p>
				</div>
				<div class="letter-card">
					<p class="letter">C</p>
					<span class="emoji">🐱</span>
					<!-- Emoji instead of image -->
					<p class="word">Cat</p>
				</div>
				<div class="letter-card">
					<p class="letter">D</p>
					<span class="emoji">🐶</span>
					<!-- Emoji instead of image -->
					<p class="word">Dog</p>
				</div>
				<div class="letter-card">
					<p class="letter">E</p>
					<span class="emoji">⚽</span>
					<!-- Emoji instead of image -->
					<p class="word">Egg</p>
				</div>
				<div class="letter-card">
					<p class="letter">B</p>
					<span class="emoji">⚽</span>
					<!-- Emoji instead of image -->
					<p class="word">Ball</p>
				</div>
				<div class="letter-card">
					<p class="letter">B</p>
					<span class="emoji">⚽</span>
					<!-- Emoji instead of image -->
					<p class="word">Ball</p>
				</div>
				<div class="letter-card">
					<p class="letter">B</p>
					<span class="emoji">⚽</span>
					<!-- Emoji instead of image -->
					<p class="word">Ball</p>
				</div>
				<div class="letter-card">
					<p class="letter">B</p>
					<span class="emoji">⚽</span>
					<!-- Emoji instead of image -->
					<p class="word">Ball</p>
				</div>
				<!-- Add more letter cards here -->
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

	/* Hide number input arrows in Webkit browsers */
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Hide number input arrows in Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
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

	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr); /* 4 items per row on desktop */
		gap: 1rem;
		/* padding: 0.5rem; */
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
	}

	.letter-card:active {
		transform: scale(0.98);
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}

	.letter {
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.word {
		font-size: 1.25rem;
		margin-top: 0.5rem;
	}

	.emoji {
		font-size: 3rem; /* Adjust the emoji size to fit the design */
	}

	/* Mobile-specific styling for 2 items per row */
	@media (max-width: 600px) {
		.grid {
			grid-template-columns: repeat(2, 1fr); /* 2 items per row on mobile */
		}

		.letter-card {
			padding: 0.75rem; /* Slightly reduce padding for mobile */
		}
	}
</style>
