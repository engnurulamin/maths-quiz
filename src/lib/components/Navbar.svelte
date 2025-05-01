<script>
	import { user_name, questions, subject } from '$lib/utils/stores';
	import { page } from '$app/stores';
	let is_open = false;
</script>

<nav>
	<div class="navbar-container px-6 pb-4">
		<div class="logo" onclick={() => (window.location.href = '/')}>
			<a href="/"><strong>QuizNest</strong></a>
		</div>
		<button class="hamburger" onclick={() => (is_open = !is_open)}> ☰ </button>
		<div class="menu-links {is_open ? 'show' : ''}">
			<a href="/" class="menu my-0 {$page.url.pathname === '/' ? 'is-active' : ''}">Home</a>
			{#if $user_name && $subject === 'math'}
				<a href="/math" class="menu my-0 {$page.url.pathname === '/math' ? 'is-active' : ''}">
					Maths
				</a>
			{/if}
			{#if $user_name && $subject === 'english'}
				<a href="/english" class="menu my-0 {$page.url.pathname === '/english' ? 'is-active' : ''}">
					English
				</a>
			{/if}
			{#if $questions.length > 0 && $user_name}
				<a href="/score" class="menu my-0 {$page.url.pathname === '/score' ? 'is-active' : ''}">
					Score
				</a>
			{/if}
		</div>
	</div>
</nav>

<style>
	nav {
		padding: 20px;
	}

	.navbar-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.logo {
		font-size: 30px;
		font-weight: bolder;
	}

	.logo a {
		text-decoration: none;
		color: white;
	}

	.hamburger {
		display: none;
		font-size: 28px;
		background: none;
		border: none;
		color: white;
		cursor: pointer;
	}

	.menu-links {
		display: flex;
		align-items: center;
	}

	.menu {
		margin-left: 15px;
		font-weight: 500;
		text-decoration: none;
		color: white;
		letter-spacing: 1.3px;
		font-size: 15px;
	}

	.is-active {
		color: rgb(15, 14, 13);
		border-bottom: 2px solid rgb(15, 14, 13);
	}

	@media (max-width: 768px) {
		.hamburger {
			display: block;
		}

		.menu-links {
			flex-direction: column;
			width: 100%;
			display: none;
		}

		.menu-links.show {
			display: flex;
			margin-top: 10px;
		}

		.menu {
			margin: 10px 0;
		}
	}
</style>
