<script setup>
  import { reactive, ref } from 'vue'

  const editando = ref(false)

  const form = reactive({
    nome: '',
    email: ''
  })

  const clientes = ref([
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, nome: 'Maria', email: 'maria@email.com' }
  ])

  function cancelar() {
    form.nome = ''
    form.email = ''
  }
</script>

<template>
   <div class="min-h-screen bg-gray-100 flex items-start justify-center pt-10">
    <div class="w-full max-w-lg">

      <!-- FORMULÁRIO -->
      <form class="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 class="text-lg font-semibold text-gray-800">
          {{ editando ? 'Editar Cliente' : 'Novo Cliente' }}
        </h2>

        <div>
          <label class="block text-sm font-medium text-gray-700">Nome</label>
            <input
              v-model="form.nome"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div class="flex justify-end gap-3">
          <button
            type="button"
            @click="cancelar"
            class="text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>

          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Salvar
          </button>
        </div>
      </form>

      <!-- LISTA DE CLIENTES-->
      <div class="bg-white rounded-lg shadow">
        <div class="p-4 border-b">
          <h3 class="text-lg font-semibold text-gray-800">
            Clientes cadastrados
          </h3>
        </div>

        <ul class="divide-y">
          <li
            v-for="cliente in clientes"
            :key="cliente.id"
            class="p-4 flex justify-between items-center"
          >
            <div>
              <p class="font-medium text-gray-800">{{ cliente.nome }}</p>
              <p class="text-sm text-gray-500">{{ cliente.email }}</p>
            </div>

            <div class="flex gap-2">
              <button
                class="rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Editar
              </button>

              <button
                class="rounded-md bg-red-600 px-3 py-1 text-sm font-semibold text-white hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
            
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

