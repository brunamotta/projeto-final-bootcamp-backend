//Função para gerar valor aleatório de 0 a 5
function valorAleatorio() {
    return parseInt(Math.floor(Math.random() * 5));
}

//Função para gerar idade dos crushes
function idadeCrush(idadeprotagonista) {
    let idadeCrush = idadeprotagonista - valorAleatorio();
    return idadeCrush;
}

module.exports = {
    valorAleatorio,
    idadeCrush
};