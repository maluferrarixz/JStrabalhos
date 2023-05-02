// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

   

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

   

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

   

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`




// const A = Number(window.prompt('me diga sua idade: '))




// if (A === 8){

//     console.log('Você pode dirigir ewbaaaa')

// }else{




//     console.log(`você não pode dirigir, porque tem ${A} anos. A idade que você tem que ter para dirigir é 18 anos;`)

// }





// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else





// const B = prompt('Que turno você estuda? Digite M para Matutino, V para Vespertino ou N para Noturno:');




// if (B === 'M') {

//     console.log('Bom dia!');

// }

// else if (B === 'V') {

//     console.log('Boa tarde!');

// }

// else if (B === 'N') {

//     console.log('Boa noite!');

// }

// else {

//     console.log('Essa opção não existe!');

// }




// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.





// let horarioEscolar = prompt("Que turno você estuda? Digite M para Matutino, V para Vespertino ou N para Noturno:")

// switch (horarioEscolar) {

//     case 'M':

//         console.log('Bom dia!')

//         break;

//     case 'V':

//         console.log('Boa Tarde')

//         break;

//     case 'N':

//         console.log('Boa Noooite')

//         break;

//     default:

//         console.log('Essa opção nao existe!')

//         break;

// }





// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("





// const B = prompt('Qual genero a gente vai ver?')

// const C = prompt('Qual o preço ein?')




// if( B === 'fantasia' && C === '15 reais'){




//     console.log('Vamos verrr !!!')

// }else{




//     console.log('nao vouuu!! :(')

// }




// 5. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.




// const B = prompt('Qual genero a gente vai ver?')

// const C = prompt('Qual o preço ein?')

// const D = prompt('Qual lanchinho voce vai comprar?')




// if( B === 'fantasia' && C === '15 reais'){




//     console.log(`vamos verrr !!! quero comer o seu ${D} !!`)

// }else{




//     console.log('nao vouuu!! :(')

// }