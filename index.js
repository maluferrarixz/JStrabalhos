// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

const X = prompt('Digite uma altura')
const Y = prompt('Digite uma largura')

function triangle(X,Y){
        let result = X*Y
        return result
}console.log(triangle(X,Y))


// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.


const A = prompt('Digite o ano atual')
const B = prompt('Digite sua data de nascimento')

function BornAge(A,B){
        let result = A - B
        return result
}console.log(BornAge(A,B))


// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

let KG = prompt('Digite seu peso:')
let MTRS = prompt('Digite sua altura:')

function IMCcalculate(KG,MTRS){
    let IMC = KG / (MTRS * MTRS)
    return IMC
}console.log(IMCcalculate(KG,MTRS))

// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

const X = prompt('Digite uma palavra:')
const Y = prompt('Digite uma palavra:')
let A = X.length;
let B = Y.length;
let I = new Boolean(false);

function Booolean(A,B,I){
if (A == B){
    return Boolean(true)
}else{
    return I
}
}console.log(Booolean(A,B,I))


// 5. Escreva uma função que recebe um array e retorna o último elemento.

const array1 = ['malu','beti','mands'];
const ultimo = array1[array1. length - 1]

function ShowArray(ultimo){

    return ultimo

}console.log(ShowArray(ultimo))

// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

const X = prompt('Digite uma palavra:')
const Y = prompt('Digite uma palavra:')
let A = X.replace(/[A-Z]/g, '').length; //apagar letras maiusculas
let B = Y.replace(/[A-Z]/g, '').length; //apagar letras maiusculas

let I = new Boolean(false);

function Booolean(A,B,I){
if (A == B){
    return Boolean(true)
}else{
    return I
}}console.log(Booolean(A,B,I))

// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

function renew() {
const anoAtual = parseInt(prompt("Qual é o ano atual?"));
const anoNascimento = parseInt(prompt("Qual é o seu ano de nascimento?"));
const anoEmissao = parseInt(prompt("Qual é o ano de emissão da sua carteira de identidade?"));
const idade = anoAtual - anoNascimento;
const anosDesdeEmissao = anoAtual - anoEmissao;

  
if (idade <= 20) {
    return anosDesdeEmissao >= 5;

}else if (idade <= 50) { 
   
    return anosDesdeEmissao >= 10;

}else{
   
   return anosDesdeEmissao >= 15;

}}console.log(renew());


