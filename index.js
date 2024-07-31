//Importando módulos
const Protagonista   = require('./personagens/protagonista.js');
const Crush          = require('./personagens/crush.js');
const prompt         = require('prompt-sync')();
const validarResposta = require('./validacoes/validarResposta.js');
const dia1           = require('./fases/dia1.js');
/* const dia2       = require('./dias/dia2.js');
const dia3          = require('./dias/dia3.js');
const dia4          = require('./dias/dia4.js'); */


//INICIO DO JOGO
console.log('');
console.log('.----------------------------------------------------------.');
console.log('|                    CONQUISTE O CRUSH                     |')
console.log('\'----------------------------------------------------------\'');

//CONTEXTUALIZAÇÃO
console.log('')
console.log('O dia dos namorados está chegando e você está sozinho(a) pela milésima vez.')
console.log('Porém, esse ano você está decidido(a) que esta data não vai passar em branco e que vai conquistar o coração de alguém para curtir este dia com você.')
console.log('');

//REGRAS DO JOGO
console.log('A regra do jogo é simples, os personagens possuem pontos de charme, inteligência, graça e dinheiro')
console.log('Você pode escolher com quais personagens quer flertar, porém, além de contar com um pouco de sorte, eles possuem os critérios próprios.');
console.log('Cabe a você fazer as escolhas certas para alcançar esses critérios e conquistar o crush dos seus sonhos.');
console.log('Você tem apenas 3 chances de flerte, caso elas se esgotem, o jogo acaba, então escolha com sabedoria!');
console.log('');

//CONSTRUINDO PROTAGONISTA
let nome = prompt('Vamos começar pelo seu nome: ');
let idade = prompt(`${nome}, qual a sua idade? `);
idade = validaIdade(idade);
let charme = 1;
let inteligencia = 1;
let dinheiro = 1;
let graca = 1;

//CONSTRUINDO ATRIBUTOS DO PROTAGONISTA - TESTE CAPRICHO
console.log('');
console.log('Agora vamos fazer um teste rápido da revista Capricho pra saber mais sobre você.');
console.log('');
console.log('Pergunta: Um rato radioativo te mordeu... Qual super poder você ganhou?')
console.log(' A) Provavelmente... Raiva. E vou ao hospital imediatamente.') //inteligencia +2 e dinheiro -1
console.log(' B) O superpoder de sempre escolher a figurinha perfeita para conquistar a reação desejada.') //charme +2 e inteligencia -1
console.log(' C) Dançar na velocidade 5 da dança do crééééu') //graça +2 e charme -1
console.log(' D) Prever as altas e baixas do mercado de ações.') //dinheiro +2 e graça -1
console.log('');

let resposta = prompt('Escolha uma alternativa: ');
resposta = resposta.toUpperCase();
resposta = validarResposta(resposta, ['A', 'B', 'C', 'D']);

switch (resposta.toUpperCase()) {
    case 'A':
        inteligencia += 2;
        dinheiro -= 1;
        break;

    case 'B' :
        charme += 2;
        inteligencia -= 1;
        break;
    
    case 'C':
        graca += 2;
        charme -= 1;
        break;
    
    case 'D':
        dinheiro += 2;
        graca -= 1;
        break;

    default:
        console.log('Alternativa inválida! Escolha entre A, B, C ou D.');
        break;
}

let protagonista = new Protagonista(nome, idade, charme, inteligencia, dinheiro, graca);

console.log('');
console.log(`${protagonista.nome}, você possui os seguintes atributos:`);

protagonista.apresentar();


//CONSTRUINDO CRUSHES
console.log('Agora, vamos conhecer os seus crushes: ');

crush1 = new Crush(
    'Fernanda',
    idadeCrush(protagonista.idade),
    (2 + valorAleatorio()),     //charme +
    (2 + valorAleatorio()),     //inteligencia +
    valorAleatorio(),           //dinheiro
    valorAleatorio(),           //graça
    'É uma garota muito bonita e inteligente, mas é um pouco tímida. Ela adora ler e assistir séries.'
);

crush2 = new Crush(
    'João',
    idadeCrush(protagonista.idade),
    valorAleatorio(),           //charme
    (2 + valorAleatorio()),     //inteligencia +
    valorAleatorio(),           //dinheiro
    (2 + valorAleatorio()),     //graça +
    'É um garoto muito inteligente e engraçado. Ele adora jogar videogame e sair com os amigos.'
);

crush3 = new Crush(
    'Mario',
    idadeCrush(protagonista.idade),
    (2 + valorAleatorio()),     //charme +
    valorAleatorio(),           //inteligencia
    (2 + valorAleatorio()),     //dinheiro +
    valorAleatorio(),           //graça
    'É cara muito rico e charmoso. Ele adora praticar esportes e sair para dançar.'
);

//APRESENTANDO CRUSHES
crush1.apresentar();
crush2.apresentar();
crush3.apresentar();

console.log('Muito bem! Você tem 4 dias para conquistar um crush. Boa sorte!');

// FASE 01 - ACADEMIA

dia1();

// FASE 02 - FACULDADE

// FASE 03 - BOATE

// FASE 04 - SHOPPING

// FASE 05 - ENCONTRO
/* Terminar a história contando como foi o encontro do protagonista com o crush no dia dos namorados*/
/* dizer q foi um fiasco e que vc pode tentar conquistar outra pessoa ano q vem rs*/

//TODO: ver onde vou botar isso: "console.log(`Que pena, você vai passar mais um dia dos namorados sozinho(a) esse ano! :( `);"

console.log('.----------------------------------------------------------.');
console.log('|                         FIM DO JOGO                       |')
console.log('\'----------------------------------------------------------\'');
console.log('')


//Função para gerar idade dos crushes
function idadeCrush(idadeprotagonista) {
    let idadeCrush = idadeprotagonista - Math.floor(Math.random() * 10/2);
    return idadeCrush;
}

//Função para gerar valor de atributo aleatório
function valorAleatorio() {
    return parseInt(Math.floor(Math.random() * 10));
}

function validaIdade(entrada) {
    try {
        if (isNaN(entrada)) {
            throw (new Error('Entrada inválida! Digite apenas números.'));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');
        entrada = parseInt(prompt('Qual a sua idade? '));
        entrada = validaIdade(entrada);
    }

    return parseInt(entrada);
}

/* function validaResposta(resposta, opcoes) {
    try {
        if (!opcoes.includes(resposta)) {
            throw (new Error('Alternativa inválida! Digite apenas a letra correspondente a alternativa desejada.'));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');
        resposta = prompt('Escolha uma alternativa: ');
        resposta = validaResposta(resposta,opcoes);
    }

    return resposta;
} */
