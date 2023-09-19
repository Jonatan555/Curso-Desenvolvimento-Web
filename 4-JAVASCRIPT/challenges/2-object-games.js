const gameName = prompt("Nome do jogo");
const gameGenre = prompt("Qual o genero");
const gameReleaseyear = prompt("Ano de lançamento");

const game = {
    name: gameName,
    genre: gameGenre,
    releaseyear: gameReleaseyear,
};

console.log(game.name);
console.log(game.genre);
console.log(game.releaseyear);