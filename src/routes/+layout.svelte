<div class="container">
  <div>Header</div>
     <div class="main">
       <slot/>
     </div>
   <footer class="footer">
     <div class="content has-text-centered">
       <p class="has-text-white">
         © 2024 Expense Tracker Developed by Nurul Amin. All rights reserved.
       </p>
     </div>
   </footer>
 </div>
 
 <style>
 
   .main{
     border-left: 5px solid #006400;
     border-right: 5px solid #006400;
     /* height: 100vh; */
   }
   footer{
     background-color: #006400 !important;
     padding: 20px !important;
   }
 </style>
 <script>
   import 'bulma/css/bulma.min.css';
   import '@fortawesome/fontawesome-free/css/all.css';
 </script>