const prompt = require('prompt-sync')();
const { validarResposta } = require('./validacoes.js');

function tentarFlertar(protagonista, crush1, crush2, crush3, atributo) {
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
    let deuMatch;
    console.log(`Você se aproximou de seu alvo e disse:`);
    if (escolha === 'A') {
        deuMatch = jogarCharme(atributo, protagonista, crush1);
    }
    if (escolha === 'B') {
        deuMatch = jogarCharme(atributo, protagonista, crush2);
    }
    if (escolha === 'C') {
        deuMatch = jogarCharme(atributo, protagonista, crush3);
    }
    return deuMatch;
}

function jogarCharme(atributo, protagonista, crush) {
    let deuMatch = [protagonista.flertar(atributo, crush), crush];
    return deuMatch;
}

module.exports = {
    tentarFlertar,
    jogarCharme
}