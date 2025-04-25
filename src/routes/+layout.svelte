<div class="container has-background-warning">
  <Navbar/>
</div>
<div class="container has-background-warning-light is-border">
  <slot/> 
 </div>
 <div class="container ">
  <footer class="footer has-background-warning py-4">
    <div class="content has-text-centered">
      <p class="has-text-white">
        © 2025 Maths Quiz Developed by <a href="https://github.com/engnurulamin" target="_blank" class="has-text-white">Nurul Amin</a> All rights reserved.
      </p>
    </div>
  </footer>
 </div>
<style>
  .is-border{
    border-top: 0;
  border-bottom: 0;
  border-left: 5px solid #dfb313;
  border-right: 5px solid #dfb313;
  }
</style>
 <script>
   import 'bulma/css/bulma.min.css';
   import '@fortawesome/fontawesome-free/css/all.css';
   import Navbar from '$lib/Navbar.svelte';
 </script>