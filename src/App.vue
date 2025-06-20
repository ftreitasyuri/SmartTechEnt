<script setup>
import Navbar from './components/Navbar.vue';
import AsideBar from './components/AsideBar.vue';
import Rodape from './components/Rodape.vue';
import { RouterLink, RouterView } from 'vue-router';
import DevWeb from '@/views/DevWeb.vue';
import About from '@/views/About.vue';
import Contact from './views/Contact.vue';


</script>

<template>
  <section id="app" class="h-screen w-full">


    <main class="sm:flex p-2 sm:p-0 sm:gap-2">
      <div class="sm:hidden">
        <Navbar />
      </div>
      <div class="">
        <AsideBar />
      </div>

      <section class="sm:overflow-x-auto sm:h-[50vw] sm:w-[85vw]">
        <div class="">
          <DevWeb />
        </div>
        <div class="">
          <About />
        </div>
        <div class="">
          <Contact />
        </div>
        
      </section>
    </main>


<!-- 
    <div class="">
      <Rodape />
    </div> -->



  </section>


</template>


<style scoped>
/* Você pode adicionar estilos adicionais aqui */
</style>
