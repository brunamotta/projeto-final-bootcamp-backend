const Personagem = require('./personagem.js');

class Crush extends Personagem {
    constructor(nome, idade, charme, inteligencia, dinheiro, graça, descricao) {
        super(nome, idade, charme, inteligencia, dinheiro, graça);
        this.descricao = descricao;
    }

    apresentar() {
        super.apresentar()
        console.log(`${this.descricao}`);
        console.log(``);

        //TODO: teste para atributos - tirar depois!!!!!
        console.log(`Charme:       ${this.charme}`);
        console.log(`Inteligência: ${this.inteligencia}`);
        console.log(`Dinheiro:     ${this.dinheiro}`);
        console.log(`Graça:        ${this.graça}`);
        console.log(``);
    }
}

module.exports = Crush;