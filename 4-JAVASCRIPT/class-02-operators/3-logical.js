let creditCard = true;
let hasCredit = true;

console.log( !!creditCard); true
console.log(! (!creditCard));true
console.log(creditCard); true

console.log(creditCard && hasCredit); true

const saveMoney = true;
const getloan = true;

console.log(saveMoney || !getloan); false