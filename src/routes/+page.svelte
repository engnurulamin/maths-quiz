<div class="columns">
  <div class="column has-text-centered">
    <div class="card m-4 p-4 has-background-warning">
      <div class="box has-background-danger-dark m-4">
        <h1>Fun with Maths!!!</h1>
      </div>
      <div class="control mx-4 my-6">
        <div class="filed">
          <input class="input is-medium is-transparent transparent-input" type="text" placeholder="Enter your name">
        </div>
      </div>
      <div class="control mx-4 my-6">
       <div class="field">
        <div class="columns">
          <div class="column p-4 is-clickable">
            <div class="card py-6 has-background-info-dark">
              <span class="type">Easy</span>
            </div>
          </div>
          <div class="column p-4 is-clickable">
            <div class="card py-6 has-background-primary-dark">
              <span class="type">Medium</span>
            </div>
          </div>
          <div class="column p-4 is-clickable">
            <div class="card  py-6 has-background-danger-dark">
              <span class="type">Hard</span>
            </div>
          </div>
        </div>
       </div>
      </div> 
      
      <div class="control mx-4 mt-6 mb-4">
        <a href="/quiz" class="button is-medium is-rounded is-fullwidth is-success-dark py-4"> 
          <i class="fa-regular fa-clock mr-2"></i> Start Quiz
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    letter-spacing: 2.5px;
    font-weight: bolder;
    font-size: 70px;
    color: white;
  }

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

  .type {
    color: white;
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 1.3px;
  }

  @media (max-width: 768px) {
   .box, h1 {
    font-size: 50px;
   }
  }
</style>
