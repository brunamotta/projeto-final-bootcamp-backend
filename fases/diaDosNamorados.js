// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//HISTÓRIA FINAL DO JOGO QUANDO VENCIDO
module.exports = (protagonista, crush) => {
    console.log('');
    console.log('');
    console.log(`Por incrível que pareça a cantada funcionou com ${crush.nome}!`);
    console.log('');
    console.log('.----------------------------------------------------------.');
    console.log('|                      DIA DOS NAMORADOS                   |')
    console.log('\'----------------------------------------------------------\'');
    console.log('');

    console.log(`${protagonista.nome}, hoje é dia dos namorados e você está super animado(a).`);
    console.log(`Você decidiu chamar ${crush.nome} para sair e escolheu um lugar bem especial para comemorar.`);
    console.log(`Ao chegar ao restaurante, a ansiedade se intensificou. ${crush.nome} estava deslumbrante e o deixou ainda mais nervoso.`);
    console.log(`A conversa começou bem, mas logo você começou a tropeçar nas próprias palavras. Contou uma história embaraçosa sobre a infância, confundiu o nome de ${crush.nome} com o um ex e, para piorar, derrubou um copo de vinho tinto em seu colo.`);
    console.log(`A cada gafe, o sorriso de ${crush.nome} se tornava mais forçado e o clima mais tenso.`);
    console.log(`No final da noite, com a autoestima no chão, você acompanhou ${crush.nome} até a porta, ouvindo um "boa noite" educado, mas frio, e teve a nítida sensação de que aquele seria o último encontro de vocês.`);

    console.log('');
    console.log('Mas não desanime, ano que vem tem mais um dia dos namorados!');
    console.log('');
    prompt('Pressione ENTER para continuar...');
    console.log('');
}
