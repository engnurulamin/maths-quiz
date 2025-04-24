<nav>
  <div class="navbar-container px-6 pb-4">
    <div class="logo">
      <a href="/"><strong>Maths Quiz</strong></a>
    </div>
    <button class="hamburger" on:click={() => is_open = !is_open}>
      ☰
    </button>
    <div class="menu-links {is_open ? 'show' : ''}">
      <a href="/" class="menu {$page.url.pathname === '/' ? 'is-active' : ''}">Home</a>
      {#if $user_name}
        <a href="/quiz" class="menu {$page.url.pathname === '/quiz' ? 'is-active' : ''}">
          Start Quiz
        </a>
      {/if}
      {#if $questions.length > 0 && $user_name}
        <a href="/score" class="menu {$page.url.pathname === '/score' ? 'is-active' : ''}">
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
    font-size: 18px;
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

<script>
  import { user_name, questions } from '$lib/stores';
  import { page } from '$app/stores';
  let is_open = false;

</script>
