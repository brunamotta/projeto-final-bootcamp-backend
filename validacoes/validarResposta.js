const prompt = require('prompt-sync')();

module.exports = (resposta, opcoes) =>{
    try {
        if (!opcoes.includes(resposta)) {
            throw (new Error('Alternativa inválida! Digite apenas a letra correspondente a alternativa desejada.'));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');
        resposta = prompt('Escolha uma alternativa: ');
        resposta = validaResposta(resposta,opcoes);
    }

    return resposta;
}