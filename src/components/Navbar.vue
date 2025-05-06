<template>
  <nav class="bg-primary flex items-center border-b-2 justify-between
                          
              
  ">
    <!-- Logo -->
    <div>
      <router-link to="/">
        <img class="w-32 sm:w-22" src="../assets/images/logoTech.png" alt="Logotipo">
      </router-link>
    </div>

    <!-- Menu (Desktop) -->
    <ul class="hidden sm:flex space-x-4 text-xl sm:text-2xl text-third">
      <li class="my-4 mx-4"><router-link to="/" class="hover:text-gray-200">Home</router-link></li>
      <li class="my-4 mx-4"><router-link to="/about" class="hover:text-gray-200">Sobre Nós</router-link></li>
      <li class="my-4 mx-4"><router-link to="/contact" class="hover:text-gray-200">Contate-nos</router-link></li>
    </ul>

    <!-- Botão do menu mobile -->
    
      <button
        class="block sm:hidden flex-end text-2xl focus:outline-none z-10"
        @click="toggleMenu"
      >
        <i class="fa-solid fa-bars m-4"></i> 
      </button>
    

    <!-- Menu (Mobile) -->
    <ul
      :class="menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full' "
      class="flex-row w-screen text-xl z-10 bg-primary h-dvh border text-fifth
             absolute top-0 left-0 transition-all duration-500 ease-in-out"
    >
      <li class="my-4 mx-4" @click="backMenu">
        <a href="#"><i class="fa-solid fa-arrow-rotate-left"></i></a>
      </li>
      <li class="my-4 mx-4 text-2xl"><router-link to="/" class="hover:text-gray-200" @click="backMenu">Home</router-link></li>
      <li class="my-4 mx-4 text-2xl"><router-link to="/about" class="hover:text-gray-200"  @click="backMenu">Sobre Nós</router-link></li>
      <li class="my-4 mx-4 text-2xl"><router-link to="/contact" class="hover:text-gray-200"  @click="backMenu">Contate-nos</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false, // Controla o estado do menu mobile
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Alterna entre abrir e fechar o menu

    if (this.menuOpen) {
        document.body.classList.add('no-scroll'); // Adiciona a classe para desativar o scroll
    } else {
        document.body.classList.remove('no-scroll'); // Remove a classe para ativar o scroll
    }

      
    },
    backMenu() {
      this.menuOpen = false; // Fecha o menu ao clicar no botão "voltar"
      document.body.classList.remove('no-scroll'); // Remove a classe para ativar o scroll

    },
  },
};
</script>
