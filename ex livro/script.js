
  //1. crie uma página HTML com um h1 de "Minha lista de Livros"

  //2. crie um array com objetos contendo informações dos livros que você mais gosta.
  
  //ex.: {
   // title: "Harry Potter e a Pedra Filosofal",
  //  author: "J. K. Rowling",

 // 4. percorra pelo array de livros e, para cada livro, crie uma div que receba o título e autor do livro e 
 // adicione essa div na página.

 // Bonus: adicione uma propriedade com a capa do livro e crie também um img para cada livro

 const arrayLivros = [
    {
      titulo: "Ele transforma",
      autor: "Clodoaldo Massagli",
      capa: "./ele-tranforma2.jpg"
    },
    {
      titulo: "Ser filho ",
      autor: "Clodoaldo Massagli",
      capa: "./ser-filho.jpg"
      //adicionar uma capa pegar um link ou gif
    },
    {
        titulo: "Uma Mulher V",
        autor: "Cristiane Cardoso",
        capa: "./uma-mulher2.jpg"
        //adicionar uma capa pegar um link ou gif
      },
      {
        titulo: "Intenso ",
        autor: "Sylvia Day",
        capa: "./51HtUAdHhnL._AC_UL600_SR408,600_.jpg"
        //adicionar uma capa pegar um link ou gif
      
      },

    ]
      // acessando o body do html com querySelector
      const body = document.querySelector('body')
      
      // percorrendo o array de livros usando o for
      for (let contador = 0; contador < arrayLivros.length; contador++) {
        // console.log no titulo e autor dos livros
        //console.log('Titulo', arrayLivros[contador].titulo, "Autora", arrayLivros[contador].autor)
      
        // criando a div que vai receber as info do livro
        const divLivro = document.createElement('div')
      
        // criar um h2 para receber o titulo do livro
        const tituloH2 = document.createElement('h2')
        tituloH2.innerText = `Título: ${arrayLivros[contador].titulo}`
      
        // criar um paragrafo que vai receber a autora do livro
        const autorParagrafo = document.createElement('p')
        autorParagrafo.innerText = `Autora: ${arrayLivros[contador].autor}`
      
        // criar img para receber a capa do livro
        const capaImg = document.createElement('img')
        capaImg.src = arrayLivros[contador].capa
      
        //adicionando o tituloH2 e o autoraParágrfo dentro da divLivro
        divLivro.appendChild(tituloH2)
        divLivro.appendChild(autorParagrafo)
        divLivro.appendChild(capaImg)
      
        // adicionando divLivro no body
        body.appendChild(divLivro)
      
        // outra forma de referenciar o body aqui
        //document.body.appendChild(divLivro)
        
        console.log(divLivro)
      
      }
      

