const paragrafo = document.createElement("p")
    paragrafo.innerHTML = "É culpa do Yaros"
    
    document.body.appendChild(paragrafo)

function mostrarTelefone(){
    document.getElementById("telefone").style.display = "block"
}

function removerTelefone(){
    document.getElementById("telefone").style.display = ""
    
}