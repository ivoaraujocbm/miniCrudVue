<template>
    <h1>Clientes</h1>
  <button @click="novoCliente">Novo Cliente</button>

  <ul>
    <li v-for="cliente in clientes" :key="cliente.id">
      {{ cliente.nome }} - {{ cliente.email }}

      <button @click="editarCliente(cliente)">Editar</button>
      <button @click="excluirCliente(cliente.id)">Excluir</button>
    </li>
  </ul>

  <ClienteForm
    v-if="mostrarForm"
    :cliente="clienteSelecionado"
    @salvar="salvarCliente"
    @cancelar="mostrarForm = false"
  />
</template>

<script setup>
  import { ref } from 'vue';
  import ClienteForm from '@/components/ClienteForm.vue';

  const clientes = ref([
    { id: 1, nome: 'João', email: 'joao@email.com'},
    { id: 2, nome: 'Maria', email: 'maria@email.com' }
  ])

  const mostrarForm = ref(false)
  const clienteSelecionado = ref(null)

  function novoCliente() {
    clienteSelecionado.value = null
    mostrarForm.value = true
  }

  function editarCliente(cliente) {
    clienteSelecionado.value = { ...cliente}
    mostrarForm.value = true
  }

  function salvarCliente(cliente){
    if (cliente.id) {
      const index = clientes.value.findIndex(c => c.id === cliente.id)
      clientes.value[index] = cliente
    } else {
      cliente.id = Date.now()
      clientes.value.push(cliente)
    }
    mostrarForm.value = false
  }

  function excluirCliente(id){
    clientes.value = clientes.value.filter(c => c.id !== id)
  }
</script>