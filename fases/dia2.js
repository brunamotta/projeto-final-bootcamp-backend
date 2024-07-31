const prompt              = require('prompt-sync')();
const { validarResposta } = require('../utilitarios/validacoes.js');
const { valorAleatorio }  = require('../utilitarios/sortear.js');
const { tentarFlertar } = require('../utilitarios/paquera.js');

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
        let sortear = valorAleatorio();

        if (sortear >= 2) {
            console.log('');
            console.log('Você decidiu continuar estudando. A cada equação resolvida, sua mente se aguçava, e a sensação de conquista era imensa. Afinal, inteligência era sexy, não é mesmo?');
            
            protagonista.inteligencia = protagonista.aprimorarAtributo(protagonista.inteligencia);

            console.log(`Sua inteligência aumentou para ${protagonista.inteligencia}.`);

        } else {
            console.log('');
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
            return false;
        }

        // ESCOLHE FLERTAR
        if (escolha === 'B') {
            let deuMatch = tentarFlertar(protagonista, crush1, crush2, crush3, 'inteligencia');

            console.log(`- "Olha, com toda essa concentração, acho que você tá tentando decifrar a fórmula da minha felicidade. Quer uma dica? ;)" `);

            if (deuMatch) {
                return true;
            } else {
                console.log('Fez-se um silêncio constrangedor. Com isso você rapidamente emendou um "to brincando kkkk" super sem graça e saiu de perto igual um cão com o rabo entre as pernas.');
                console.log('Você decidiu ir para casa. Foi um dia ruim e você precisa esquecer o que aconteceu hoje.');
                return false;
            }
        }
    }

    // PULA OS ESTUDOS E VAI DIRETO PRO FLERTE
    if (resposta === 'B') {
        let deuMatch = tentarFlertar(protagonista, crush1, crush2, crush3, 'inteligencia');

        console.log(`- "Olha, com toda essa concentração, acho que você tá tentando decifrar a fórmula da minha felicidade. Quer uma dica? ;)" `);

        if (deuMatch) {
            return deuMatch;
        } else {
            console.log('Fez-se um silêncio constrangedor. Com isso você rapidamente emendou um "to brincando kkkk" super sem graça e saiu de perto igual um cão com o rabo entre as pernas.');
            console.log('Você decidiu ir para casa. Foi um dia ruim e você precisa esquecer o que aconteceu hoje.');
            return false;
        }
    }
};