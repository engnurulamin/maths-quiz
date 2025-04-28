<div class="control mx-5 my-4">
	<div class="field">
		<div class="columns">
			<div class="column is-clickable">
				<div class="card py-1 has-background-info-dark card-shadow">
					<span class="type is-size-5">📖 Word Meaning</span>
				</div>
			</div>
			<div class="column is-clickable">
				<div class="card py-1 has-background-primary-dark card-shadow">
					<span class="type is-size-5">🟰 Word Synonym</span>
				</div>
			</div>
			<div class="column is-clickable">
				<div class="card py-1 has-background-danger-dark card-shadow">
					<span class="type is-size-5">🔀 Word Antonym</span>
				</div>
			</div>
			<div class="column is-clickable">
				<div class="card py-1 has-background-success-dark card-shadow">
					<span class="type is-size-5">✍️ Spelling</span>
				</div>
			</div>
		</div>
	</div>
</div>
<hr class="is-paddingless has-background-warning-light p-0 m-0" />

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
		box-shadow:
			0 8px 16px rgba(0, 0, 0, 0.2),
			0 12px 24px rgba(0, 0, 0, 0.15);
		transition: box-shadow 0.3s ease-in-out;
	}

	.card-shadow:hover {
		box-shadow:
			0 12px 24px rgba(0, 0, 0, 0.3),
			0 16px 32px rgba(0, 0, 0, 0.2);
	}
</style>
