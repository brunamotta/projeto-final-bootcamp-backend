//Importando módulos
const prompt              = require('prompt-sync')();
const { validarResposta } = require('../utilitarios/validacoes.js');
const { tentarFlertar }   = require('../utilitarios/paquera.js');
const { miniGame }        = require('../utilitarios/miniGame.js');

module.exports = (protagonista, crush1, crush2, crush3) => {
    console.log('');
    console.log('.----------------------------------------------------------.');
    console.log('|                          DIA 03                          |')
    console.log('\'----------------------------------------------------------\'');
    console.log('');
    console.log('Sextou! E hoje tem chopada da faculdade, você passa o dia todo animado e finalmente chega a hora.');
    console.log('As luzes piscavam em ritmo frenético, a música pulsava nas paredes e a energia era contagiante. Ao adentrar a festa, você se sentiu como uma estrela de cinema. A multidão se movimentava em um mar de corpos, o cheiro de suor e perfume se misturavam no ar, criando uma atmosfera única.');
    console.log('');
    console.log('A pista de dança te chamava, mas você ainda não se decidiu se cai dentro ou se explora um pouco antes. Suas opções são:');
    console.log(' A) Vou direto pra pista de dança!');
    console.log(' B) Melhor eu dar uma volta pra pegar uma bebida antes e ver se encontro alguém interessante.');
    
    let resposta = prompt('O que você vai fazer? ');
    resposta = resposta.toUpperCase();
    resposta = validarResposta(resposta, ['A', 'B']);
    console.log('');
    
    if (resposta === 'A') {
        // DANÇAR
        if (miniGame()) {
            protagonista.graca = protagonista.aprimorarAtributo(protagonista.graca);
            console.log(`Sua graça aumentou para ${protagonista.graca} e você se sente confiante e pronto para conquistar o crush dos seus sonhos.`);
        } else {
            protagonista.graca = protagonista.decrementarAtributo(protagonista.graca);
            console.log(`Sua graça diminuiu para ${protagonista.graca} e você se sente um pouco desanimado e constrangido. ^^\' `);
        }
        // FIM DANÇA

        // FLERTAR FINAL
        console.log('');
        console.log('Um tempo se passou... Seus crushes estão na festa... Você ja tomou uns bons drinks para criar coragem e finalmente...');

        let deuMatch = tentarFlertar(protagonista, crush1, crush2, crush3, 'graca');

        console.log(`- "Gat@, Se beleza fosse crime, você já teria sido pres@ há muito tempo.". ;)" `);

        if (deuMatch[0]) {
            return deuMatch;

        } else {
            console.log('A musica estava muito alta e el@ não conseguiu entender o que você falou. Você tentou repetir, mas alguém @ puxou e tascou um beijão nel@ na sua frente. Que droga!');
            console.log('Você decidiu ir para casa. Você está desolado precisa esquecer o que aconteceu hoje.');

            return false;
        }
    }

    //PULAR DANÇA  E VAI DIRETO PRO FLERTE
    if (resposta === 'B') {
        let deuMatch = tentarFlertar(protagonista, crush1, crush2, crush3, 'graca');

        console.log(`- "Gat@, Se beleza fosse crime, você já teria sido pres@ há muito tempo.". ;)" `);

        if (deuMatch[0]) {
            return deuMatch;
        } else {
            console.log('A musica estava muito alta e el@ não conseguiu entender o que você falou. Você tentou repetir, mas alguém @ puxou e tascou um beijão nel@ na sua frente. Que droga!');
            console.log('Você decidiu ir para casa. Você está desolado precisa esquecer o que aconteceu hoje.');

            return false;
        }
    }
    
};