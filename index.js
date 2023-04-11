// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

// const X = prompt('Digite uma altura')
// const Y = prompt('Digite uma largura')

// function triangle(X,Y){
//         let result = X*Y
//         return result
// }console.log(triangle(X,Y))


// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.


// const A = prompt('Digite o ano atual')
// const B = prompt('Digite sua data de nascimento')

// function BornAge(A,B){
//         let result = A - B
//         return result
// }console.log(BornAge(A,B))


// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

// let KG = prompt('Digite seu peso:')
// let MTRS = prompt('Digite sua altura:')

// function IMCcalculate(KG,MTRS){
//     let IMC = KG / (MTRS * MTRS)
//     return IMC
// }console.log(IMCcalculate(KG,MTRS))

// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

// const X = prompt('Digite uma palavra:')
// const Y = prompt('Digite uma palavra:')
// let A = X.length;
// let B = Y.length;
// let I = new Boolean(false);

// function Booolean(A,B,I){
// if (A == B){
//     return Boolean(true)
// }else{
//     return I
// }
// }console.log(Booolean(A,B,I))


// 5. Escreva uma função que recebe um array e retorna o último elemento.

// const array1 = ['malu','beti','mands'];
// const ultimo = array1[array1. length - 1]

// function ShowArray(ultimo){

//     return ultimo

// }console.log(ShowArray(ultimo))

// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

// const X = prompt('Digite uma palavra:')
// const Y = prompt('Digite uma palavra:')
// let A = X.length;
// let B = Y.length;
// let I = new Boolean(false);

// function Booolean(A,B,I){
// if (A == B){
//     return Boolean(true)
// }else{
//     return I
// }
// if (A && B){
     


// }
//  const capital = 
// }console.log(Booolean(A,B,I,capital))

// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.


// const desenvolvedora = {
//     nome: 'maria',
//     idade: 18,
//     email: 'maria@gmail.com'
// }

// // const nomeDadesenvolvedora = desenvolvedora.nome
// // console.log(nomeDadesenvolvedora)

// desenvolvedora.nome = 'Paula'
// desenvolvedora['email'] = 'paula@gmail.com'
// console.log(desenvolvedora) // imprime como se fosse lista



const movie = {
    nome: 'alice no país das maravilhas',
    ano: 2010,
    personagem: 'alice, chapeleiro maluco, coelho, rainha vermelha',
    assistiu: 'sim',
    direção: 'Tim Burton'
}


const movienome = movie.nome
console.log(movienome)
console.log(movie['nome'])

const movieano = movie.ano
console.log(movieano)
console.log(movie['ano'])


const moviepersona = movie.personagem
console.log(moviepersona)
console.log(movie['personagem'])


const movieWatch = movie.assistiu
console.log(movieWatch)
console.log(movie['assistiu'])


const movieDirection = movie.direção
console.log(movieDirection)
console.log(movie['direção'])