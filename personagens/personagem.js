class Personagem {
    constructor(nome, idade, charme, inteligencia, dinheiro, graca) {
        this.nome = nome;
        this.idade = idade;
        this.charme = charme;
        this.inteligencia = inteligencia;
        this.dinheiro = dinheiro;
        this.graca = graca;
    }

    apresentar() {
        console.log('');
        console.log(`${this.nome}, ${this.idade} anos.`);
    }
}

module.exports = Personagem;
