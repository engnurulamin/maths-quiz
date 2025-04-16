<div class="columns">
  <div class="column has-text-centered">
    <div class="card m-4 p-4 has-background-warning">
      <h1 class="title is-1">Fun with Maths!!!</h1>
      <div class="control">
        <div class="filed">
          <input class="input is-medium is-transparent transparent-input" type="text" placeholder="Enter your name">
        </div>
      </div>  
    </div>
  </div>
</div>

<style>
  .transparent-input {
    background-color: transparent !important;
    border: 2px solid rgba(237, 222, 154, 0.361);
    padding: 0.75rem 1.5rem;
    border-radius: 40px 40px 40px 40px;

    transition: all 0.3s ease;
  }

  .transparent-input::placeholder {
    color: white;
    opacity: 1;
    font-weight: 400;
    font-size: 20px;
  }

  .transparent-input:focus,
  .transparent-input:active {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6); /* light border */
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.4); /* soft glow */
  }
</style>
