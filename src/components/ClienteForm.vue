<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  cliente: Object
})

const emit = defineEmits(['salvar', 'cancelar'])

const form = reactive({
  id: null,
  nome: '',
  email: ''
})

watch(
  () => props.cliente,
  (novo) => {
    if (novo) {
      Object.assign(form, novo)
    } else {
      form.id = null
      form.nome = ''
      form.email = ''
    }
  },
  { immediate: true }
)

function salvar() {
  if (form.nome && form.email) {
    emit('salvar', { ...form })
  } else {
    alert("Preencha todos os campos!")
  }
}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">
        {{ cliente ? ' Editar Cliente' : ' Novo Cliente' }}
      </h2>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input 
            v-model="form.nome" 
            type="text"
            placeholder="Ex: Ivo Araújo" 
            class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">E-mail Corporativo</label>
          <input 
            v-model="form.email" 
            type="email"
            placeholder="ivo@empresa.com" 
            class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div class="flex justify-end space-x-3 mt-6">
          <button 
            @click="$emit('cancelar')"
            class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            Cancelar
          </button>
          <button 
            @click="salvar"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  </div>
</template>