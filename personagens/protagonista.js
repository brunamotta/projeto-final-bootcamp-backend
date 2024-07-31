const Personagem = require('./personagem.js');

class Protagonista extends Personagem {
    #tentativasFlerte

    constructor(nome, idade, charme, inteligencia, dinheiro, graça) {
        super(nome, idade, charme, inteligencia, dinheiro, graça);
        this.#tentativasFlerte = 3;
    }

    aprimorarAtributo(atributo) {
        let aumento = Math.floor((Math.random() * 10) / 2);

        if (aumento == 0) {
            aumento = 1;
        }
        atributo += aumento;
        console.log(`Seu ${atributo} aumentou em ${aumento} pontos!`);
        return atributo;
    }

    decrementarAtributo(atributo) {
        let decremento = Math.floor((Math.random() * 10) / 2);

        if (decremento == 0) {
            decremento = 1;
        }
        atributo -= decremento;
        console.log(`Seu ${atributo} diminuiu em ${decremento} pontos!`);
        return atributo;
    }

    flertar(atributo, crush) {
        if (atributo > crush[atributo]) {
            console.log(`Você flertou com ${crush.nome}, e conseguiu um date para o dia dos namorados! PARABÉNS! :) `);
            this.tentativasFlerte--;
            return true;
            
        } else {
            console.log(`Você flertou com ${crush.nome}, falou besteira, e agora ele te acha um pouco estranho...`);
            this.tentativasFlerte--;
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