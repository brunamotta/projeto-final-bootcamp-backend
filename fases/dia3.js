const prompt              = require('prompt-sync')();
const { validarResposta } = require('../validacoes.js');
const { valorAleatorio }  = require('../sortear.js');

module.exports = (protagonista, crush1, crush2, crush3) => {
    console.log('');
    console.log('.----------------------------------------------------------.');
    console.log('|                          DIA 03                          |')
    console.log('\'----------------------------------------------------------\'');
    console.log('');
    console.log('Sextou! E hoje tem chopada da faculdade.');

    console.log('Mais tarde naquele dia...')
    console.log('As luzes piscavam em ritmo frenético, a música pulsava nas paredes e a energia era contagiante. Ao adentrar a festa, você se sentiu como uma estrela de cinema. A multidão se movimentava em um mar de corpos, o cheiro de suor e perfume se misturavam no ar, criando uma atmosfera única. Você sorriu, pronto para se jogar nessa aventura.');
    console.log('');
    console.log('A pista de dança te chamava, mas você ainda não se decidiu se cai dentro ou se explora um pouco antes. Suas opções são:');
    console.log(' A) Vou direto pra pista de dança! Como disse anitta: "Vocês pensaram que eu não ia rebolar minha raba hoje?"  ;)');
    console.log(' B) Melhor eu dar uma volta pra pegar uma bebida antes ver se encontro alguém interessante.');
    console.log('');
    console.log('O que você vai fazer?');

    let resposta = prompt('Escolha uma opção: ');
    resposta = resposta.toUpperCase();
    resposta = validarResposta(resposta, ['A', 'B']);

    if (resposta === 'A') {
        let ganhou = miniGame();
        if (ganhou) {
            protagonista.graca = protagonista.aprimorarAtributo(protagonista.graca);
            console.log(`Sua graca aumentou para ${protagonista.graca}.`);
            console.log('Você se sente confiante e pronto para conquistar o crush dos seus sonhos.');
        } else {
            protagonista.graca = protagonista.decrementarAtributo(protagonista.graca);
            console.log(`Sua graca diminuiu para ${protagonista.graca}.`);
            console.log('Você se sente um pouco desanimado e envergonhado. (^^\') ');
        }
    }

    if (resposta === 'B') {
        
    }
    
};