<script setup>
import { ref } from 'vue'
import ClienteForm from '@/components/ClienteForm.vue'

// Lógica de negócio (Mantida intacta)
const clientes = ref([
  { id: 1, nome: 'João Silva', email: 'joao@cbm.com.br' },
  { id: 2, nome: 'Maria Souza', email: 'maria@cbm.com.br' }
])

const mostrarForm = ref(false)
const clienteSelecionado = ref(null)

function novoCliente() {
  clienteSelecionado.value = null
  mostrarForm.value = true
}

function editarCliente(cliente) {
  clienteSelecionado.value = { ...cliente }
  mostrarForm.value = true
}

function salvarCliente(cliente) {
  if (cliente.id) {
    const index = clientes.value.findIndex(c => c.id === cliente.id)
    clientes.value[index] = cliente
  } else {
    cliente.id = Date.now()
    clientes.value.push(cliente)
  }
  mostrarForm.value = false
}

function removerCliente(id) {
  clientes.value = clientes.value.filter(c => c.id !== id)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Gerenciamento de Clientes</h1>
        <button 
          @click="novoCliente"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          + Novo Cliente
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b text-gray-600">
              <th class="py-3 px-4">Nome</th>
              <th class="py-3 px-4">Email</th>
              <th class="py-3 px-4 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientes" :key="cliente.id" class="border-b hover:bg-gray-50">
              <td class="py-3 px-4">{{ cliente.nome }}</td>
              <td class="py-3 px-4 text-gray-600">{{ cliente.email }}</td>
              <td class="py-3 px-4 text-center space-x-2">
                <button 
                  @click="editarCliente(cliente)"
                  class="text-amber-600 hover:underline font-medium"
                >
                  Editar
                </button>
                <button 
                  @click="removerCliente(cliente.id)"
                  class="text-red-600 hover:underline font-medium"
                >
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ClienteForm
        v-if="mostrarForm"
        :cliente="clienteSelecionado"
        @salvar="salvarCliente"
        @cancelar="mostrarForm = false"
      />
    </div>
  </div>
</template>
