const prompt = require('prompt-sync')();

function validarIdade(entrada) {
    try {
        if (isNaN(entrada)) {
            throw (new Error('Entrada inválida! Digite apenas números.'));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');
        entrada = parseInt(prompt('Qual a sua idade? '));
        entrada = validarIdade(entrada);
    }

    return parseInt(entrada);
}

function validarResposta(resposta, opcoes) {
    try {
        if (!opcoes.includes(resposta)) {
            throw (new Error('Alternativa inválida! Digite apenas a letra correspondente a alternativa desejada.'));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');
        resposta = prompt('Escolha uma alternativa: ');
        resposta = resposta.toUpperCase();
        resposta = validarResposta(resposta,opcoes);
    }

    return resposta;
}

module.exports = {
    validarIdade,
    validarResposta
};