function imprimirDado(dado) {
  console.log('Outras tarefas')
  console.log(dado())
}

imprimirDado(function() {
  return 'Olá, mundo'
})