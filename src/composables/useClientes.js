import { ref, reactive } from "vue";

export function useClientes(){
  const editando = ref(false)
  const idEditando = ref(null)

  const form = reactive({
    nome: '',
    email: ''
  })

  const clientes = ref([
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, nome: 'Maria', email: 'maria@email.com' }
  ])

  function salvar() {
    if(!form.nome || !form.email) return

    if(editando.value){
      const index = clientes.value.findIndex(c => c.id === idEditando.value);
      if (index !== -1) {
        clientes.value[index] = { 
          id: idEditando.value, 
          nome: form.nome, 
          email: form.email
        };
      } 
    } else {
        clientes.value.push({
          id: Date.now(),
          nome: form.nome,
          email: form.email
        });
      }
      cancelar()
    }

  function editar(cliente) {
    form.nome = cliente.nome
    form.email = cliente.email
    idEditando.value = cliente.id
    editando.value = true
  }

  function excluir(id) {
    clientes.value = clientes.value.filter(c => c.id !== id)
  }

  function cancelar() {
    form.nome = ''
    form.email = ''
    editando.value = false
    idEditando.value = null
  }

  return {
    clientes,
    form,
    editando,
    salvar,
    editar,
    excluir,
    cancelar
  }
}