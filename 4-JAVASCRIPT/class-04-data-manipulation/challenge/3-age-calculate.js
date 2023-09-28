const dateWasborn = new Date (prompt("Digite a data de nascimento (yyyy-mm-dd"))

const dateNow = new Date();
const userAge = Math.floor(
    (dateNow - dateWasborn) / 1000 / 60 / 60 / 24 / 365.25
);
console.log(userAge);