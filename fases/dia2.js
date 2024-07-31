const prompt = require('prompt-sync')();
const { validarResposta } = require('../validacoes.js');
const { valorAleatorio } = require('../sortear.js');

module.exports = (protagonista, crush1, crush2, crush3) => {
    console.log('');
    console.log('.----------------------------------------------------------.');
    console.log('|                          DIA 02                          |')
    console.log('\'----------------------------------------------------------\'');
    console.log('')
    console.log('Você acorda com o despertador tocando, hoje é dia de prova de cálculo.')
    console.log('Momentos depois, na biblioteca da faculdade, entre livros antigos e o suave aroma de café, você se dedicava aos estudos para passar na prova.');
    console.log('');
    console.log('De repente, você percebe que seus crushes também estão na biblioteca. O que você vai fazer?');
    console.log(' A) "Continuo estudando, afinal, a prova é importante."');
    console.log(' B) "Que se dane a prova, não preciso provar nada além do meu amor!" - Fecha o livro e se aproxima do crush.');
    console.log('');

    let resposta = prompt('Digite sua opção: ');
    resposta = resposta.toUpperCase();
    resposta = validarResposta(resposta, ['A', 'B']);

    if (resposta === 'A') {

        // ESTUDOS
        let sortear = valorAleatorio()*2;

        if (sortear >= 3) {
            console.log('');
            console.log('Você decidiu continuar estudando. A cada equação resolvida, sua mente se aguçava, e a sensação de conquista era imensa. Afinal, inteligência era sexy, não é mesmo?');
            
            protagonista.inteligencia = protagonista.aprimorarAtributo(protagonista.inteligencia);

            console.log(`Sua inteligência aumentou para ${protagonista.inteligencia}.`);

        } else {
            console.log('Você tentou se concentrar, mas a presença dos crushes na biblioteca era uma distração constante. Você falhou nos estudos e ficou de recuperação em cálculo. :(');
            
            protagonista.inteligencia = protagonista.decrementarAtributo(protagonista.inteligencia);

            console.log(`Sua inteligência diminuiu para ${protagonista.inteligencia}.`);
        }
        // FIM DOS ESTUDOS

        // DECISÃO DE IR PARA CASA OU FLERTAR
        console.log(`Muito bem, ${protagonista.nome}, você não tem mais aulas hoje.`);
        console.log(' A) Estou cansado por hoje, vou dormir.');
        console.log(` B) Desta vez me sinto pronto(a) para seduzir! (Você só tem ${protagonista.tentativasFlerte} tentativa(s) restante(s)).`);

        let escolha = prompt('Qual a sua escolha? ');
        escolha = escolha.toUpperCase();
        escolha = validarResposta(escolha, ['A', 'B']);

         //FINALIZA DIA 2 SEM FLERTAR SEGUE O JOGO
        if (escolha === 'A') {
            console.log('');
            console.log('Você decidiu ir para casa. Foi um dia cheio e você merece e precisa descansar.');
            return protagonista;
        }

        // ESCOLHE FLERTAR
        if (escolha === 'B') {
            tentarFlertar();
        }
    }

    // PULA OS ESTUDOS E VAI DIRETO PRO FLERTE
    if (resposta === 'B') {
        tentarFlertar();
    }
    
    function tentarFlertar() {
        console.log('');
        console.log('Você escolheu flertar. Afinal, a vida é curta e você não quer perder tempo. ');
        console.log(` A) ${crush1.nome}`);
        console.log(` B) ${crush2.nome}`);
        console.log(` C) ${crush3.nome}`);
        console.log('');
        let escolha = prompt(`Com qual crush você deseja flertar? `);
        escolha = escolha.toUpperCase();
        escolha = validarResposta(escolha, ['A', 'B', 'C']);
        console.log('');

        if (escolha === 'A') {
            jogarCharme(crush1);
        }
        if (escolha === 'B') {
            jogarCharme(crush2);
        }
        if (escolha === 'C') {
            jogarCharme(crush3);
        }
        //TODO: conferir resultado do flerte e imprimir história de sucesso ou fracasso
    }

    function jogarCharme(crush) {
        console.log(`Você se aproximou de ${crush.nome} e disse:`);
        console.log(`- "${crush.nome}, se você fosse um exercício, eu te faria todos os dias. Mas com mais repetições e menos descanso. ;)" `);
        if (protagonista.flertar('charme', protagonista, crush)) {
            return 'FIM DO JOGO'
        } else {
            return protagonista
        }
    }
};

//TODO: pensar na possibilidade de modularizar o tentar flertar com o jogar charme pois estão se repetindo em todas as fases.