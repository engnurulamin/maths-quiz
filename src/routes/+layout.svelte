<div class="container has-background-warning">
  <Navbar/>
</div>
<div class="container has-background-warning-light">
  <slot/> 
 </div>
 <div class="container">
  <footer class="footer has-background-warning py-4">
    <div class="content has-text-centered">
      <p class="has-text-white">
        © 2024 Expense Tracker Developed by Nurul Amin. All rights reserved.
      </p>
    </div>
  </footer>
 </div>

 <script>
   import 'bulma/css/bulma.min.css';
   import '@fortawesome/fontawesome-free/css/all.css';
   import Navbar from '$lib/Navbar.svelte';
 </script>