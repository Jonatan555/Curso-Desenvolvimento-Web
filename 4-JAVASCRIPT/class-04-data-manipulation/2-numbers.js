let num1 = 2;
let num2 = 2;

console.log(num1);
console.log(parseInt(num1));console.log(parseInt(num2));
console.log(parseFloat(num2));

console.log(String(num2).length);
console.log(String(num1.toFixed(2)).replace(",",","));
console.log(`R$ ${ 2.435769853467.toFixed(2).replace(",",",")}`);

console.log(num1.toLocaleString("pt-BR", {
    style:"currency",
    currency: "usd"
}
))


console.log(num1);
console.log(Math.abs(num1));

const numbers = [2,3,6,2,4,7,98,3,2,54,76,3]

console.log(Math.max(2, 3));
console.log(Math.max(...numbers));
console.log(Math.max(2, 3, 6, 4, 7, 98, 3, 2, 54, 76, 3));

console.log(Math.min(2, 3));
console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(2.5));
console.log(Math.round(2.5));
console.log(Math.floor(2.999999));
console.log(Math.ceil(2.00001));
console.log(Math.round(0.99) * 10);
console.log(Math.round(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(0));
while (Math.random() !== 0) {
    console.log("rodando...");
}