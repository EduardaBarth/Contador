const input = document.getElementById("numero2"); //cria variável e ela é o valor do input
let numero = 0

function aumentar(){
    numero = numero + 1
    tela()
}
function diminuir(){
    numero = numero - 1
    tela()            
}
function sub(){
    numero = input.value
    numero.innerText
    numero=parseInt(numero)        
    tela()
}
//atulizar 
function tela(){
    const p = document.querySelector("#resultado"); //ou getElementById(-sem #-)
    p.innerText = numero      
}

//const não muda e let pode mudar