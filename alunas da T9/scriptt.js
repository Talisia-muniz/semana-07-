//Instruções:
// Crie um array com o nome de todas as alunas da turma
// selecione o elemento "lista-alunas"
// crie uma função com a lógica que cria elementos "li" com o nome de cada aluna, e adicione na lista de alunas.
//Instruções:
// Crie um array com o nome de todas as alunas da turma
// selecione o elemento "lista-alunas"
// crie uma função com a lógica que cria elementos "li" com o nome de cada aluna, e adicione na lista de alunas.



const alunas = [
'Natalia Luiza',
'Liana',
'Maria Jose',
'Marisa',
'Ilza',
'Raquel1',
'Raquel2',
'Carol',
]

const listaAlunas = document.querySelector('#lista-alunas');



for(let i = 0; i < alunas.length; i++){
const li = document.createElement('li')
li.innerText = alunas[i];
listaAlunas.appendChild(li);
console.log(alunas[i])
}