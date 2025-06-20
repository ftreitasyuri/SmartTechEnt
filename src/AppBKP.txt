<script setup>
import Navbar from './components/Navbar.vue';
import Rodape from './components/Rodape.vue';
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <section id="app" class="h-screen w-full">  


    <div class=" "><Navbar/></div>
    <div class="grid justify-center items-center -mb-24 font-bold">
      <!-- <h1 class="text-2xl  border-b-4 text-fifth border-fifth">Consultoria de TI</h1>       -->
    </div>
    <div class="mt-24"><router-view /></div>
    
    <div class=""><Rodape/></div>

    
    
  </section>
  
 
</template>


<style scoped>
/* Você pode adicionar estilos adicionais aqui */
</style>


