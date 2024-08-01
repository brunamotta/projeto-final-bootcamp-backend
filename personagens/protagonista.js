const Personagem = require('./personagem.js');

class Protagonista extends Personagem {

    constructor(nome, idade, charme, inteligencia, dinheiro, graca) {
        super(nome, idade, charme, inteligencia, dinheiro, graca);
    }

    aprimorarAtributo(atributo) {
        let aumento = Math.floor(Math.random() * 5);
        if (aumento == 0) {
            aumento = 1;
        }
        atributo += aumento;
        return atributo;
    }

    decrementarAtributo(atributo) {
        let decremento = Math.floor(Math.random() * 5);
        if (decremento == 0) {
            decremento = 1;
        }
        atributo -= decremento;
        return atributo;
    }

    flertar(atributo, crush) {
        if (this[atributo] >= crush[atributo]) {
            return true;
        } else {
            return false;
        }
    }

    apresentar() {
        super.apresentar()
        console.log(`Charme:       ${this.charme}`);
        console.log(`Inteligência: ${this.inteligencia}`);
        console.log(`Dinheiro:     ${this.dinheiro}`);
        console.log(`Graça:        ${this.graca}`);
        console.log(``);
    }

}

module.exports = Protagonista;