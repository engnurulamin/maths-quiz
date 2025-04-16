<nav>
  <div class="navbar-container px-6 py-2">
    <div class="logo">
      <a href="/"><strong>Maths Quiz</strong></a>
    </div>
    <button class="hamburger" on:click={() => menuOpen = !menuOpen}>
      ☰
    </button>
    <div class="menu-links {menuOpen ? 'show' : ''}">
      <a href="/" class="menu {is_active === 1 ? 'is-active' : ''}" on:click={() => activeTab(1)}>
        Home
      </a>
      <a href="/balance" class="menu {is_active === 2 ? 'is-active' : ''}" on:click={() => activeTab(2)}>
        Start Quiz
      </a>
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
    font-size: 24px;
    font-weight: bold;
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
  }

  .is-active {
    color: rgb(247, 231, 202);
    border-bottom: 2px solid rgb(247, 231, 202);
  }

  /* Responsive Styles */
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
  let is_active = 1;
  let menuOpen = false;

  function activeTab(val) {
    is_active = val;
    menuOpen = false; // optional: close menu after click on mobile
  }
</script>
