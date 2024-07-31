const prompt           = require('prompt-sync')();
const { validarChute } = require('./validacoes.js');

function miniGame() {
    console.log(' --------------------------------- DANCE DANCE REVOLUTION --------------------------------- ');
    console.log('Você vai pra pista e se prepara pois sua música está tocando, bora dançar!');
    console.log('');
    console.log('COMO JOGAR:');
    console.log('Você tem 5 tentativas para adivinhar o número entre 0 e 9 e arrasar na pista de dança!');
    console.log('Cuidado para não pagar mico!');
    console.log('Preparado? Já!');
    console.log('');

    const numCerto = Math.floor(Math.random() * 10);
    
    for(let movimentos = 5; movimentos >= 0; movimentos--) {
        let chute = prompt(' Adivinhe o número de 0 a 9: ')
        chute = validarChute(chute);
        console.log('');

        if (chute === numCerto) {
            console.log('Você arrazou na pista de dança, todos ficaram impressionados com seu gingado e ritmo!');
            return true;
        } else {
            console.log(``);
            if (chute > numCerto) {
                console.log(`Errou! O número é MENOR (Restam ${movimentos} tentativas).`);
            } else {
                console.log(`Errou! O número é MAIOR (Restam ${movimentos} tentativas).`);
            }
        }
    }
    console.log(`Sinto muito o número certo era ${numCerto}. Você dançou como uma minhoca tendo um ataque epilético!`);
    return false;
}

module.exports = { miniGame };