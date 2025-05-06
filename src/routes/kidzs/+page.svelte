<div class="columns">
	<div class="column">
		<div class="card has-background-warning has-text-centered m-4 p-4">
			<div class="columns">
				<div class="column p-0 m-0">
					<div class="control">
						<div class="field m-2">
							<button class="button is-fullwidth is-info is-dark">Arabic</button>
						</div>
					</div>
					<div class="control">
						<div class="field m-2">
							<button class="button is-fullwidth is-info is-dark">Arabic</button>
						</div>
					</div>
				</div>
				<div class="column p-0 m-0">
					<div class="control">
						<div class="field m-2">
							<button class="button is-fullwidth is-info is-dark">Arabic</button>
						</div>
					</div>
					<div class="control">
						<div class="field m-2">
							<button class="button is-fullwidth is-info is-dark">Arabic</button>
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
