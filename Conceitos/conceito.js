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
// filme.personagens = ['Gael', 'Patrick de sa junqueira', 'Clara tavares'] -- add novo vaol

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

// const Person = {
//     nome: 'MAlu',
//     idade: 37
// }
// function personObject(Person){

//     const Foods = ['batata', 'sushi', 'chocolate']
//     Person.comidas = Foods

//     const novoObjeto = {
//         ...Person,
//         Bffs:{
//             nome: 'Lari',
//             idade: '16'
//         }
//     }
//     return console.log(`O nome da pessoa é ${novoObjeto.nome}, e suas comidas favoritas são ${novoObjeto.comidas[0]},${novoObjeto.comidas[1]} e ${novoObjeto.comidas[2]}. Sua melhor amiga é ${novoObjeto.Bffs.nome} e tem ${novoObjeto.Bffs.idade} anos`)
// }personObject(Person)

// ATIVIDADES


// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
// const arm = {
//     nome: 'Jhope',
//     lista: ['Maça', 'banana', 'alga']

// }

// function showArm(arm){
      
//     console.log(`Olá ${arm.nome}. Hoje seus itens prioritários na lista de comprar são ${arm.lista[0]},${arm.lista[1]} e ${arm.lista[2]}`);

// }
// showArm(arm)

// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

// // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

// const novoArm = {
//     ...arm,
//     lista: ['Kimchi', 'bulgolgi', 'frti']

// }
// function showArm2(x){
      
//     console.log(`Olá ${x.nome}. Hoje seus itens prioritários na lista de comprar são ${x.lista[0]},${x.lista[1]} e ${x.lista[2]}`);

// }
// showArm2(novoArm)


// // 2. Resolva os passos a seguir: 
    
// //     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
// const arm1 = {

//     nome: 'Malu',
//     idade: 17,
//     profissao: 'Professora de dança'

// }

// const arm2 = {

//     nome: 'Beti',
//     idade: 17,
//     profissao: 'Biologa marinha'

// }

// // //     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
// function returArray(arm1, arm2){

//     const carac1 = arm1.nome + arm2.nome
//     const carac2 = carac1.length
//     const carac3 = arm1.profissao + arm2.profissao
//     const carac4 = carac3.length
//     const nomes = [];
//     nomes.push(arm1.nome, arm2.nome,carac2,arm1.idade,arm2.idade,arm1.profissao,arm2.profissao,carac4)
//     console.log(nomes)
    
// }returArray(arm1,arm2)

// //     1. O valor de `nome`
// //     2. O numero de caracteres do valor `nome`
// //     3. O valor de `idade`
// //     4. O valor de `profissão`
// //     5. O numero de caracteres do valor `profissão`

// // 3. Resolva os passos a seguir: 
    
// //     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// const carrinho  = [];
    
// //     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
// const maca = {
//     nome: 'Maçã',
//     disponibilidade: true
// }
// const banana = {
//     nome: 'Banana',
//     disponibilidade: true
// }
// const tangerina = {
//     nome: 'Tangerinaaaa',
//     disponibilidade: true
// }

// //     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

// function fruitPush(carrinho,maca,banana,tangerina){

//     carrinho.push(maca,banana,tangerina)
//     console.log(carrinho)

// }
// fruitPush(carrinho,maca,banana,tangerina)
    
// //     - 💡  Dica
        
// //       Aqui você deve usar o método **push()**
        
// //     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

// // Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

// const name = prompt('Digite seu nome')
// const age = prompt('Digite sua idade')
// const profission = prompt('Digite sua profissão')

// const person = {
//     nome: '',
//     idade: '',
//     profissao: ''
// }
// function objectToPrompt(person,name,age,profission){

//     person.nome = name
//     person.idade = age
//     person.profissao = profission
//     console.log(person)
//     console.log(typeof(person))


// }objectToPrompt(person,name,age,profission)


// const funcaoCompare = (num1, num2) => {
//     if (num1 === num2) {
//         console.log("Sucesso! Os números são iguais!")
//     }
// }

// const n1 = Number(prompt("Digite um número:"))
// const n2 = Number(prompt("Digite outro número"))

// funcaoCompare(n1, n2)


// const funcaoCompare2 = (numb1, numb2) => {
//     if (numb1 === numb2) {
//         console.log("Números iguais")
//     } else {
//         console.log("Números diferentes")
//     }
// }

// const nu1 = Number(prompt("Digite um número:"))
// const nu2 = Number(prompt("Digite outro número"))

// funcaoCompare2(nu1, nu2)


// const funcaoCompare3 = (x, y) => {
//     if (x === y) {
//         console.log("Iguais")
//     } else if (x >= y) {
//         console.log(`${x} é maior que ${y}`)
//     } else if (x <= y) {
//         console.log(`${x} é menor que ${y}`)
//     }
// }

// const x1 = Number(prompt("Digite um número:"))
// const y2 = Number(prompt("Digite outro número"))

// funcaoCompare2(x1, y2)




// let paisDeOrigem = prompt("Digite o país que você nasceu:")
// switch (paisDeOrigem) {
//     case 'Brasil':
//         console.log('brasileiro')
//         break;
//     case 'EUA':
//         console.log('norte americano')
//         break;
//     case 'EUA':
//         console.log('norte americano')
//         break;
//     case 'Inglaterra':
//         console.log('inglês')
//         break;
//     default:
// //         console.log('nacionalidade não encontrada')
// //         break;
// // }

// let sentimentoDia = prompt("Digite o seu sentimento do dia:")
// switch (sentimentoDia) {
//     case 'Tristeza':
//         console.log('Que tistreza')
//         break;
//     case 'Felicidade':
//         console.log('YEY')
//         break;
//     case 'Raiva':
//         console.log('Não gita, não gita')
//         break;
//     case 'Nojo':
//         console.log('Poxa')
//         break;
//     case 'Medo':
//         console.log('Num chora pelo amor de deus')
//         break;
//     default:
//         console.log('Não sei que sentimento é esse')
//         break;
// }

const people = prompt('Tem o EM concluido?').toLowerCase()
const people1 = prompt('Tem 18 anos ou mais?').toLowerCase()
const people2 = prompt('faz outra facul?').toLowerCase()

function peopleReturnDate(people,people1,people2){

        if(people === 'sim' && people1 === 'sim' && people2 === 'nao' ){
            console.log('Você pode estudar')

        }else{
            console.log('Voce não pode estudar')
        }
}peopleReturnDate(people,people1,people2)