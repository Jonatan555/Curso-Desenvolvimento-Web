const num1 = Number  (prompt ("Digite o primeiro numero"))
const num2 = Number (prompt ("Digite o segundo numero"))


const add = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;
const rem = num1 % num2;
const exp = num1 ** num2;
const sqr = num2 (1 / num1)

document.write(`A soma de ${num1} e ${num2} =${add} <br>`)
document.write(`A subtraçao de ${num1} e ${num2} = ${sub} <br>`)
document.write(`A multiplicaçao de ${num1} e ${num2} = ${mul} <br>`)
document.write(`A divisao de ${num1} e ${num2} = ${div.toFixed(2)} <br>`)
document.write(` o resto da divisao de ${num1} e ${num2} = ${rem} <br>`)
document.write(`A potencia de ${num1} elevado a ${num2} = ${exp} <br>`)
document.write(`A raiz ${num1} de ${num2} = ${sqr.tofixed(2)} <br>`)