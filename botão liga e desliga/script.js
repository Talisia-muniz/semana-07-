


const imagem = document.querySelector('img')
const background = document.body
const h1 = document.querySelector('h1')
const gif = document.querySelector('.imagem')

// const body = document.querySelector('body')

background.style.backgroundColor = "red"

function changeBg() {
  if (background.style.backgroundColor == "red") {
    background.style.backgroundColor = "black"
    h1.innerText = "Desligado"
    h1.style.color = "white"
    gif.src = "https://media.giphy.com/media/N4a7e1ftdbQWc/giphy.gif"
  } else {
    background.style.backgroundColor = "red"
    h1.innerText = "Ligado"
    h1.style.color = "black"
    gif.src = "https://media.giphy.com/media/3KVRMtLXfORVosk6TW/giphy.gif"
  }
} 