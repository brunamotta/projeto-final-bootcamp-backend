const Personagem = require('./personagem.js');

class Crush extends Personagem {
    constructor(nome, idade, charme, inteligencia, dinheiro, graca, descricao) {
        super(nome, idade, charme, inteligencia, dinheiro, graca);
        this.descricao = descricao;
    }

    apresentar() {
        super.apresentar()
        console.log(`${this.descricao}`);
        console.log(``);
    }
}

module.exports = Crush;