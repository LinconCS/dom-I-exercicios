//I)
const frutas = ["laranja", "limão", "uva"]

/*const laranja = document.querySelector('#fruta-1')
laranja.innerHTML = frutas[0]

const limao = document.getElementById('fruta-2')
limao.innerHTML = frutas[1]

const uva = document.getElementById('fruta-3')
uva.innerHTML = frutas[2]
*/

const frutaParaDeterminar = document.getElementById('fruta-4')

// outra forma
const frutasDoHtml = document.querySelectorAll('#lista-de-frutas li')
console.log(frutasDoHtml)

for(let i = 0; i < frutas.length; i++) {
    frutasDoHtml[i].innerHTML = frutas[i]
}

//II)

let input = document.getElementById('texto')

const imprimeTexto = () => {
    console.log(texto.value)
}

//III)
const addInList = () => {
    frutaParaDeterminar.innerHTML = texto.value
}