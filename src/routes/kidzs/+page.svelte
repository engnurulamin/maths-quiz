<script>
	let show = false;
</script>

<div class="columns">
	<div class="column">
		<div class="card has-background-warning has-text-centered m-4 p-4">
			<div class="columns">
				<div class="column p-0 m-0">
					<div class="control">
						<div class="field m-2">
							<button class="button is-fullwidth is-primary is-dark button-shadow">
								<figure class="image is-24x24">
									<img src="/icons/religious.png" alt="" />
								</figure>
								<span class="is-size-5 has-text-white ml-2">Arabic</span>
							</button>
						</div>
					</div>
					<div class="control">
						<div class="field m-2 is-grouped is-grouped-multiline">
							{#if show}
								<div class="control is-expanded">
									<button class="button is-info has-text-white is-dark is-fullwidth">Vowel</button>
								</div>
								<div class="control is-expanded">
									<button class="button is-link is-fullwidth">Consonant</button>
								</div>
							{/if}
							{#if !show}
								<button
									class="button is-fullwidth is-info is-dark button-shadow"
									onclick={() => (show = !show)}
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
						<div class="field m-2">
							<button class="button is-fullwidth is-danger is-dark button-shadow">
								<figure class="image is-24x24">
									<img src="/icons/language.png" alt="" />
								</figure>
								<span class="is-size-5 has-text-white ml-2">English</span>
							</button>
						</div>
					</div>
					<div class="control">
						<div class="field m-2 is-grouped is-grouped-multiline">
							{#if show}
								<div class="control is-expanded">
									<button class="button is-success is-dark has-text-white is-fullwidth">1234</button
									>
								</div>
								<div class="control is-expanded">
									<button class="button is-link is-dark is-fullwidth has-text-white">১২৩৪</button>
								</div>
							{/if}
							{#if !show}
								<button
									class="button is-fullwidth is-success is-dark button-shadow"
									onclick={() => (show = !show)}
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
</style>
