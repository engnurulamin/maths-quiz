<div class="columns">
  <div class="column">
    <div class="card has-background-warning m-4 p-4">
      <h1 class="has-text-white has-text-weight-bold has-text-centered py-6 title is-2">
        <i class="fa-regular fa-clock mr-2"></i> 200s
      </h1>

      <div class="control mx-4 my-6">
        <div class="filed">
          <div class="box has-background-warning-light p-4  has-text-centered">
            <p class="has-text-dark is-size-1 has-text-weight-bold">10+52=?</p>
          </div>
        </div>
      </div>
      <div class="control mx-4 my-6">
        <div class="filed">
          <input class="input is-medium is-transparent transparent-input" type="text" placeholder="Write your answer">
        </div>
      </div>
      <div class="control mx-4 mt-6 mb-4">
        <button class="button is-medium is-rounded is-fullwidth is-info-dark py-4"> 
           Next
        </button>
      </div>
      <div class="control mx-4 mt-6 mb-4">
        <button class="button is-medium is-rounded is-fullwidth is-danger py-4"> 
           Reset
        </button>
      </div>
    </div>
  </div>
</div>

<style>
   .transparent-input {
    background-color: rgb(243, 230, 166) !important;
    border: 2px solid rgba(56, 3, 3, 0.796);
    padding: 0.75rem 1.5rem;
    border-radius: 40px 40px 40px 40px;
    transition: all 0.3s ease;
  }

  .transparent-input::placeholder {
    color: black;
    opacity: 0.5;
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