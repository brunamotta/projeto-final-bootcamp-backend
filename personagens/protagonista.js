const Personagem = require('./personagem.js');

class Protagonista extends Personagem {
    #tentativasFlerte

    constructor(nome, idade, charme, inteligencia, dinheiro, graça) {
        super(nome, idade, charme, inteligencia, dinheiro, graça);
        this.#tentativasFlerte = 1;
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

    flertar(atributo, protagonista, crush) {
        if (protagonista[atributo] >= crush[atributo]) {
            this.tentativasFlerte = 0;
            return true;
            
        } else {
            this.tentativasFlerte = 0;
            return false;
        }
    }

    get tentativasFlerte() {
        return this.#tentativasFlerte;
    }

    set tentativasFlerte(tentativasAtualizadas) {
        return this.#tentativasFlerte = tentativasAtualizadas;
    }

    apresentar() {
        super.apresentar()
        console.log(`Charme:       ${this.charme}`);
        console.log(`Inteligência: ${this.inteligencia}`);
        console.log(`Dinheiro:     ${this.dinheiro}`);
        console.log(`Graça:        ${this.graça}`);
        console.log(``);
    }

}

module.exports = Protagonista;