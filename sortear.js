//Função para gerar idade dos crushes
function idadeCrush(idadeprotagonista) {
    let idadeCrush = idadeprotagonista - Math.floor(Math.random() * 10/2);
    return idadeCrush;
}

//Função para gerar valor de atributo aleatório
function valorAleatorio() {
    return parseInt(Math.floor(Math.random() * 10)/2);
}

module.exports = {
    idadeCrush,
    valorAleatorio
};