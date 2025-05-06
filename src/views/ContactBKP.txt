<template>
  <div class="p-8 text-third">
    <h1 class="text-4xl font-bold">Contato</h1>
    <form @submit.prevent="submitForm" class="grid container mx-auto text-fifth">
      <label for="nome">Nome:</label>
      <input v-model="form.nome" type="text" id="nome" class="input" placeholder="Digite seu nome" />

      <label for="assunto">Assunto:</label>
      <input v-model="form.assunto" type="text" id="assunto" class="input" placeholder="Assunto da mensagem" />

      <label for="empresa">Empresa:</label>
      <input v-model="form.empresa" type="text" id="empresa" class="input" placeholder="Sua empresa (opcional)" />

      <label for="email">Email:</label>
      <input v-model="form.email" type="email" id="email" class="input" placeholder="Digite seu e-mail" />

      <label for="telefone">Telefone:</label>
      <input v-model="form.telefone" type="tel" id="telefone" class="input" placeholder="Telefone para contato" />

      <label for="mensagem">Mensagem:</label>
      <textarea v-model="form.mensagem" id="mensagem" class="input" placeholder="Digite sua mensagem"></textarea>

      <button type="submit" class="bg-third rounded-md h-12 text-lg font-bold">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        nome: '',
        assunto: '',
        empresa: '',
        email: '',
        telefone: '',
        mensagem: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/contatos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(this.form),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error('Erro da API:', data);
          throw new Error(data.message || 'Erro ao enviar formulário');
        }

        alert('Mensagem enviada com sucesso!');
        this.form = { nome: '', assunto: '', empresa: '', email: '', telefone: '', mensagem: '' };
      } catch (error) {
        alert('Erro ao enviar mensagem: ' + error.message);
        console.error('Detalhes:', error);
      }
    },
  },
};
</script>

<style>
.input {
  min-height: 2.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #f5f5f5;
  color: #000;
  font-size: 1rem;
}
</style>
