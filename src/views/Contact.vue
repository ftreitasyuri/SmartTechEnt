<template>
    <div class="p-8 text-third">
      <h1 class="text-4xl font-bold">Contato</h1>
      <div>
        <form action="" class="grid container mx-auto text-fifth">
         
          <label for="">Nome:</label>
          <input class="min-h-10 rounded-md mb-4 text-primary text-lg p-2 bg-fifth" type="text" placeholder="Digite seu nome">

          <label for="">Assunto</label>
          <input class="min-h-10 rounded-md mb-4 text-primary text-lg p-2 bg-fifth" type="text" placeholder="Digite o assunto foco da sua mensagem">
          <label for="">Email para Contato</label>
          <input class="min-h-10 rounded-md mb-4 text-primary text-lg p-2 bg-fifth" type="email" placeholder="Digite seu e-mail">
          <label for="">Telefone para Contato</label>
          <input class="min-h-10 rounded-md mb-4 text-primary text-lg p-2 bg-fifth" type="number" placeholder="Digite um telefone para contato">

          <label for="">Mensagem</label>
          <textarea class="min-h-10 rounded-md mb-4 text-primary text-lg p-2 bg-fifth" name="" id="" placeholder="Digite sua mensagem aqui..."></textarea>

          <button class="bg-third rounded-md h-12 text-lg font-bold">Enviar</button>
        </form>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  };
  </script>
  