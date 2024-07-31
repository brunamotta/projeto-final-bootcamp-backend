const prompt          = require('prompt-sync')();
const validarResposta = require('./validacoes/validarResposta.js');

module.exports = (protagonista, crush1, crush2, crush3) => {
    console.log('');
    console.log('.----------------------------------------------------------.');
    console.log('|                          DIA 01                          |')
    console.log('\'----------------------------------------------------------\'');
    console.log('')

    // ir na academia encontrar os crushes na aula de funcional dar opção de treinar (e ganhar charme) ou flertar direto com o crush da escolha do usuário
    console.log('Você acorda cedo e decide ir à academia para começar o dia com o pé direito. Chegando lá, você encontra os seus crushes. O que você deseja fazer?');
    console.log(' A) Treinar.');
    console.log(' B) Vou aquecer tentando flertar com alguém.');
    console.log('');

    let resposta = prompt('Escolha uma opção: ');
    resposta = resposta.toUpperCase();
    resposta = validaResposta(resposta, ['A', 'B']);

    if (resposta === 'A') {
        if (Math.floor(Math.random() * 10) >= 5) {
            console.log('');
            console.log('Você escolheu treinar. O suor escorre pelo seu rosto enquanto você empurra a barra cada vez mais alto. A academia está lotada, mas você está concentrado em um único objetivo: conquistar o corpo dos seus sonhos.');
            console.log('Ao final do treino, você se sente mais confiante e percebe que os seus crushes estão te olhando. Parece que o seu charme natural está fazendo efeito.');   
            protagonista.charme = aprimorarAtributo(protagonista.charme);
        } else {
            protagonista.charme = decrementarAtributo(protagonista.charme);
        }
    }
    if (resposta === 'B') {
        console.log('');
        console.log('Você escolheu flertar. Afinal, a vida é curta e você não quer perder tempo. ');
        console.log(` A) ${crush1.nome}`);
        console.log(` B) ${crush2.nome}`);
        console.log(` C) ${crush3.nome}`);
        let escolha = prompt(`Com qual crush você deseja flertar? `);
        escolha = escolha.toUpperCase();
        escolha = validarResposta(escolha, ['A', 'B', 'C']);
        
        //TODO: conferir resultado do flerte e imprimir história de sucesso ou fracasso

    }

}