//Importando módulos
const Protagonista                      = require('./personagens/protagonista.js');
const Crush                             = require('./personagens/crush.js');
const prompt                            = require('prompt-sync')();
const { valorAleatorio, idadeCrush }    = require('./utilitarios/sortear.js');
const { validarIdade, validarResposta } = require('./utilitarios/validacoes.js');
const dia1                              = require('./fases/dia1.js');
const dia2                              = require('./fases/dia2.js');
const dia3                              = require('./fases/dia3.js');
const diaDosNamorados                   = require('./fases/diaDosNamorados.js');

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
console.log('A regra do jogo é simples: Os personagens possuem pontos de charme, inteligência, graça e dinheiro')
console.log('Você pode escolher com quais personagens quer flertar, porém, além de contar com um pouco de sorte, cada um deles possuem os critérios próprios.');
console.log('Cabe a você fazer as escolhas certas para alcançar esses critérios e conquistar o crush dos seus sonhos.');
console.log('');

//CONSTRUINDO PROTAGONISTA
let nome = prompt('Vamos começar pelo seu nome: ');
let idade = prompt(`${nome}, qual a sua idade? `);
idade = validarIdade(idade);
let charme = 2;
let inteligencia = 2;
let dinheiro = 2;
let graca = 2;

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

switch (resposta) {
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

//CONSTRUINDO PROTAGONISTA - CRIANDO OBJETO
let protagonista = new Protagonista(nome, idade, charme, inteligencia, dinheiro, graca);
console.log('');
console.log(`${protagonista.nome}, você possui os seguintes atributos:`);
protagonista.apresentar();

//CONSTRUINDO CRUSHES
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
    'É um cara rico e charmoso. Ele adora praticar esportes e sair para dançar.'
);

//APRESENTANDO CRUSHES
console.log('Agora, vamos conhecer os seus pretendentes: ');
crush1.apresentar();
crush2.apresentar();
crush3.apresentar();

console.log('Muito bem! Você tem 3 dias para conquistar um crush. Boa sorte!');
console.log('');
prompt('Pressione ENTER para começar...');
console.log('');
//COMEÇAR AS FASES
while(true) {

// FASE 1 - ACADEMIA
    let fase1 = dia1(protagonista, crush1, crush2, crush3);
    if(fase1[0]) {
        diaDosNamorados(protagonista, fase1[1]);
        break;
    }
    console.log('');
    console.log('Vamos revisar seu atual status:');
    protagonista.apresentar();
    prompt('Pressione ENTER para continuar...');

//FASE 2 - FACULDADE
    let fase2 = dia2(protagonista, crush1, crush2, crush3);
    if(fase2[0]) {
        diaDosNamorados(protagonista, fase2[1]);
        break;
    }
    console.log('');
    console.log('Vamos revisar seu atual status:');
    protagonista.apresentar();
    prompt('Pressione ENTER para continuar...');

//FASE 3 - CHOPADA
    let fase3 = dia3(protagonista, crush1, crush2, crush3);
    if(fase3[0]) {
        diaDosNamorados(protagonista, fase3[1]);
        break;
    } else {
        console.log('');
        console.log(`Que pena, você vai passar mais um dia dos namorados sozinho(a) esse ano! :( `);
        console.log('');
        console.log('Mas não desanime, você pode tentar novamente no ano que vem!');
        break;
    }
}

// ENCERRAMENTO DO JOGO
console.log('.----------------------------------------------------------.');
console.log('|                         FIM DO JOGO                      |')
console.log('\'----------------------------------------------------------\'');
console.log('')
console.log('Obrigado por jogar! Até a próxima! :) ')
console.log('')
console.log('')
console.log('.----------------------------------------------------------.');
console.log('|                          CRÉDITOS                        |')
console.log('\'----------------------------------------------------------\'');
console.log('Desenvolvido por: Bruna Motta. (github.com/brunamotta)')
console.log('Inspirado no jogo "Monster Prom" da Beautiful Glitch.')
console.log('')