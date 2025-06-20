<template>
  <nav class="bg-primary flex flex-col min-w-[300px]
                          
              
  ">
     <!-- Logo -->
    <div class="mx-auto">
      <router-link to="/">
        <img class="w-32 sm:w-22" src="../assets/images/logoTech.png" alt="Logotipo">
      </router-link>
    </div>

    <!-- Menu (Desktop) -->
    <ul class="hidden h-[75vh] sm:flex sm:flex-col items-end justify-center text-2xl text-third ">
      <li class="my-4 mx-4"><router-link to="/" class="hover:text-gray-200 ">Home</router-link></li>
      <li class="my-4 mx-4"><router-link to="/about" class="hover:text-gray-200">Sobre</router-link></li>
      <li class="my-4 mx-4"><router-link to="/contact" class="hover:text-gray-200">Contate-nos</router-link></li>
    </ul>

   
  </nav>
</template>

<script>

</script>
