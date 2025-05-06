<template>
  <main class="
      
      bg-second text-fifth
      grid justify-center
      sm:flex sm:gap-6
      
      
              
              
  ">
  <router-link to="/devweb">
    <div class="
      border rounded-sm w-96 sm:min-w-80 sm:w-11/12 mt-4 p-2      
  ">
  <img class="h-60 w-full sm:h-96 rounded-sm" src="../assets/images/programarII.jpg" alt="Imagem do desenvolvimento de sites e apps">    
  <h1 class="text-center font-bold mt-2">Desenvolvimento de Sites/Apps</h1>
  <p class="text-center">Verifique as técnologias de desenvolvimento de Sites/Apps</p>

  </div>
  </router-link>
  
  <!-- FIM PRIMEIRA PARTE -->

  <!-- INICIO SEGUNDA PARTE -->
  
  <router-link to="DevAutomate">
    <div class="
      border rounded-sm w-96 sm:min-w-80 sm:w-11/12 mt-4 p-2
      
  ">
  <img class="h-60 w-full sm:h-96" src="../assets/images/homeAutomateII.jpg" alt="Imagem de automação robotica">    
  <h1 class="text-center font-bold mt-2">Automação de Processos</h1>
  <p class="text-center"> Verifique as tecnologias utilizadas no desenvolvimento de automações</p>

  </div>
  </router-link>
  
  <!-- FIM SEGUNDA PARTE -->

  <!-- INICIO TERCEIRA PARTE -->
  
  <router-link to="DevBi">
    <div class="
      border rounded-sm w-96 sm:min-w-80 sm:w-11/12 mt-4 mb-4 p-2
      
  ">
  <img class="h-60 w-full sm:h-96" src="../assets/images/dashboardII.jpg" alt="Imagem de dashboard">    
  <h1 class="text-center font-bold mt-2">Bussiness Inteligence (B/I)</h1>
  <p>Verifique as técnologias utilizadas e alguns projetos de BI</p>

  </div>
  </router-link>
 
  
  <!-- FIM TERCEIRA PARTE -->

 
  
  </main> 
</template>

<script>
export default {
  name: 'Home',
}
</script>
