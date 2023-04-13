// console.log("OIII, sou a malukitalulu !")

// const nome = 'Maluuuuuuu'
// // const sobrenome = 'Ferrari'
// const idade = 17
// const boolean = true

// let sobrenome

// console.log(typeof nome)
// console.log(typeof idade)
// // console.log(typeof sobrenome)
// console.log(typeof boolean)

// const nomeDoUsuario = prompt('Digite seu nome')
// const idadeDoUsuario = prompt('Digite sua idade')

// const variavel = "nome"
// const mensagem = "hoje o dia esta bom"


// console.log(variavel.length) //valor de letras
// console.log(variavel.toUpperCase)// letras em maiusculo
// console.log(variavel.toLowerCase)// letras em minusculo
// console.log(mensagem.includes("dia"))// ver se essa mensagem esta na frase/mensagem
// // console.log(variavel.replace("dia","mes"))// 

// const frase = prompt('Digite uma frase')

// console.log(frase.toUpperCase())
// console.log(frase.toLowerCase())
// console.log(frase.replace(/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z)/gi,"p"))


// const lista = ['abacaxi','melancia','morango','arroz'] 
// // const pedir = prompt('Digite um número') 
// // console.log(lista[pedir-1]) 
// //  console.log(lista.length)
//  lista.push('abacate','farinha')
//  console.log(lista)
//  lista.pop()
//  console.log(lista)
//  lista.splice(2)
// console.log(lista)
// //  push - adiciona elemnto no array
//  pop - remove ultimo elemento
// splice - remove a partir da posição que colocou, todos da lista

// const array = ['10','20','30','40','50','60','70','80','90','100','101'] 

// console.log(array.length)

// array.push('102')
// console.log(array)
// array.splice(8)
// console.log(array)

// function calculo(A,L){const area = A*L
// console.log(area)}
// calculo(3,5)
// calculo(9,5)
// calculo(2,5)
// calculo(2,5)
// calculo(1,5)
// calculo(7,5)

// // dois modos de fazer a function
// function calculoP(A,L){const area = A*L
//     return area}
//     console.log(calculoP (9,1))

// const nome = "malu"
// function html(nome){ 
    
//     console.log (`olá ${nome}`) 
    
// }console.log(html(nome))

// const tarefas = [ ]
// const ask = prompt('Quais tarefas que você precisa realizar?, escreva-as aqui!:')
// tarefas.push(ask)
// console.log(tarefas)
// const remove = prompt("Digite o índice da tarefa que digitou anteriormente, assim poderei apagá-lo da lista!")
// tarefas.splice(remove)
// console.log(tarefas)

// ---------- CONCEITO DE OBJETO
// const desenvolvedora = {
//     nome: 'Amanda',
//     idade: 17,
//     email: 'amanda@gmail.com'
// }

// const nomeDaDesenvolvedora = desenvolvedora.nome // notação com ponto (.)
// console.log(nomeDaDesenvolvedora)
// const nomeDaDesenvolvedora2 = desenvolvedora['nome'] // notação com colchetes ([])
// console.log(desenvolvedora.nome)
// console.log(desenvolvedora)
// desenvolvedora.nome = 'Paula'

// desenvolvedora['email'] = 'paula@gmail.com'

// console.log(desenvolvedora)
// const filme ={ 
//     diretor: 'James Cameron',
//     nome: 'Avatar: The Way of Water',
//     ano_lan: 2022,
//     elenco: ['Sam Worthington', 'Jake Sully', 'Sigourney Weaver', 'Zoe Saldana', 'Bailey Bass', 'Britain Dalton'],
//     visualizado: true,
    
// }
// filme.personagens = ['Gael', 'Patrick de sa junqueira', 'Clara tavares']

// filme.elenco[0] = 'Camila'
// console.log(filme.elenco)

// filme.nome = 'Avatar: The Way of Water'
// console.log(filme.nome)

// console.log(`O nome desse filme é ${filme.nome}, seus personagens são ${filme.personagens[0]}, ${filme.personagens[1]} e ${filme.personagens[2]}`)

// const NewMovie={
//     ...filme,
//     nome: 'O outro lado do paraíso',
//     Vilã: 'Sophia Monserrá'
// }

// const listaDeNomes = ['pedro','clara','Betty']
// const copiaListaDeNomes = [...listaDeNomes,'Mcieelee'] /// adiciona um elemento no fim da lista

// console.log(copiaListaDeNomes)
// console.log(filme.diretor)

// console.log(filme.nome)

// console.log(filme['ano_lan'])

// console.log(filme['elenco'])

// console.log(filme['visualizado'])

// const Person = {
//     nome: 'Lukita',
//     idade: 14,
//     generoMusical: 'Kpop'
// }

// console.log(`O nome da pessoa é ${Person.nome}, ela tem ${Person.idade} anos e gosta muito de ${Person.generoMusical}`)

// const maeDePet={
// nome: 'maria',
// pet:{
//     nome:'Alberto',
//     raca: 'Salsicha',
//     idade: 2
//     }
// }

// const nomeDePet = maeDePet.pet.nome
// console.log(nomeDePet)

// const desenvolvedor = {
//     nome: 'Maria',
//     lingaguens:['java','CSS','HTML']
// }

// desenvolvedor.numeroLinguagens = 3
// console.log(desenvolvedor)

// const professores = [
//     {nome: 'Paula', componente: 'Técnico Profissional'},
//     {nome: 'Bruno', componente: 'Portugues'},
//     {nome: 'Cacau', componente: 'Artes !!'}
// ]
// console.log(professores[0].nome)

const Person = {
    nome: 'MAlu',
    idade: 37
}
function personObject(Person){

    const Foods = ['batata', 'sushi', 'chocolate']
    Person.comidas = Foods

    const novoObjeto = {
        ...Person,
        Bffs:{
            nome: 'Lari',
            idade: '16'
        }
    }
    return console.log(`O nome da pessoa é ${novoObjeto.nome}, e suas comidas favoritas são ${novoObjeto.comidas[0]},${novoObjeto.comidas[1]} e ${novoObjeto.comidas[2]}. Sua melhor amiga é ${novoObjeto.Bffs.nome} e tem ${novoObjeto.Bffs.idade} anos`)
}personObject(Person)