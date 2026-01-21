<template>
  <div>
    <h2>{{ cliente ? 'Editar Cliente' : 'Novo Cliente' }}</h2>

    <input v-model="form.nome" placeholder="Nome"/>
    <input v-model="form.email" placeholder="Email"/>

    <button @click="salvar">Salvar</button>
    <button @click="$emit('cancelar')">Cancelar</button>
  </div>
</template>

<script setup>
  import { reactive, watch } from 'vue';

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
  )

</script>