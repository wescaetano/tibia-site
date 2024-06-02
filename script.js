function clickMenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }

  const btn = document.getElementById('btn-menu')
  btn.classList.toggle('ativar')
  
}