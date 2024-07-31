const prompt = require('prompt-sync')();

//VALIDAR ENTRADA DA IDADE DO USUÀRIO
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

//VALIDAR RESPOSTAS DO USUÁRIO
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

//VALIDAR CHUTE DO MINIGAME DE DANÇA
function validarChute(chute) {
    try {
        if (isNaN(chute) || chute < 0 || chute > 9) {
            throw (new Error('Entrada inválida! Digite apenas números de 0 a 9.'));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');
        chute = prompt(' Adivinhe o número de 0 a 9: ');
        chute = validarChute(chute);
    }

    return parseInt(chute);
}

module.exports = {
    validarIdade,
    validarResposta,
    validarChute
};