const prompt = require('prompt-sync')();
const { validarResposta } = require('../utilitarios/validacoes.js');
const { valorAleatorio } = require('../utilitarios/sortear.js');
const { tentarFlertar } = require('../utilitarios/paquera.js');

module.exports = (protagonista, crush1, crush2, crush3) => {
    console.log('');
    console.log('.----------------------------------------------------------.');
    console.log('|                          DIA 01                          |')
    console.log('\'----------------------------------------------------------\'');
    console.log('')
    console.log('Você acorda cedo e decide ir à academia para começar o dia com o pé direito. Chegando lá, você encontra os seus crushes. O que você vai fazer?');
    console.log(' A) Treinar, claro.');
    console.log(' B) Eu não venho na academia pra treinar, venho pra paquerar!');
    console.log('');

    let resposta = prompt('Escolha uma opção: ');
    resposta = resposta.toUpperCase();
    resposta = validarResposta(resposta, ['A', 'B']);

    if (resposta === 'A') {

        // TREINO
        let sortear = valorAleatorio()*2;
        
        if (sortear >= 3) {
            console.log('');
            console.log('Você escolheu treinar. O suor escorre pelo seu rosto enquanto você empurra a barra pesada para o alto a cada repetição. A academia está lotada, mas você está concentrado em um único objetivo: conquistar o corpo dos seus sonhos.');
            console.log('Ao final do treino, você se sente mais confiante e percebe que os seus crushes estão te olhando. Parece que o seu charme natural está fazendo efeito.');   
            
            protagonista.charme = protagonista.aprimorarAtributo(protagonista.charme);
            
            console.log(`Seu charme aumentou para ${protagonista.charme}.`);
            console.log('');

        } else {
            console.log('Você derrubou a barra no seu pé e todos na academia olharam para você. Que vergonha! Você tentou disfarçar, mas a dor era evidente. Acho que o crush não vai querer se aproximar de você depois disso.');

            protagonista.charme = protagonista.decrementarAtributo(protagonista.charme);

            console.log(`Seu charme diminuiu para ${protagonista.charme}.`);
        }
        // FIM DO TREINO

        // DECISÃO DE IR PARA CASA OU FLERTAR
        console.log(`Muito bem, ${protagonista.nome}, você terminou seu treino.`);
        console.log(' A) Vamos para casa.');
        console.log(` B) Vou tentar a sorte com alguém! `);
        console.log('');

        let escolha = prompt(`Qual a sua escolha? `);
        escolha = escolha.toUpperCase();
        escolha = validarResposta(escolha, ['A', 'B']);

        //FINALIZA DIA 1 SEM FLERTAR SEGUE O JOGO
        if (escolha === 'A') {
            console.log('');
            console.log('Você decidiu ir para casa. Afinal, você já fez o suficiente por hoje. Amanhã é um novo dia.');
            return false; 
        }

        // ESCOLHE FLERTAR
        if (escolha === 'B') {
            let deuMatch = tentarFlertar(protagonista, crush1, crush2, crush3, 'charme');

            console.log(`- "Gat@, se você fosse um exercício, eu te faria todos os dias. Mas com mais repetições e menos descanso. ;)" `);

            if (deuMatch[0]) {
                return deuMatch;
            } else {
                console.log('Fez-se um silêncio constrangedor. Com isso você rapidamente emendou um "to brincando kkkk" super sem graça e saiu de perto igual um cão com o rabo entre as pernas.');
                console.log('Você decidiu ir para casa. Foi um dia ruim e você precisa esquecer o que aconteceu hoje.');
                return deuMatch;
            }
        }
    }

    // PULA O TREINO E VAI DIRETO PRO FLERTE
    if (resposta === 'B') {
        let deuMatch = tentarFlertar(protagonista, crush1, crush2, crush3, 'charme');

        console.log(`- "Gat@, se você fosse um exercício, eu te faria todos os dias. Mas com mais repetições e menos descanso. ;)" `);
        
        if (deuMatch[0]) {
            return deuMatch;
        } else {
            console.log('Fez-se um silêncio constrangedor. Com isso você rapidamente emendou um "to brincando kkkk" super sem graça e saiu de perto igual um cão com o rabo entre as pernas.');
            console.log('Você decidiu ir para casa. Foi um dia ruim e você precisa esquecer o que aconteceu hoje.');
            return deuMatch;
        }
    }
};