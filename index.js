let pesquisa = document.getElementById('buscar')

document.getElementById('ir').addEventListener('click', (ev) => {
    alert(`pesquisando ${pesquisa.value}`)
    pesquisa.value =""
})

pesquisa.addEventListener('keypress', (ev) => {
    if(ev.key == 'Enter') {
        alert(`pesquisando ${pesquisa.value}`) 
        pesquisa.value = ""
    }

    
})