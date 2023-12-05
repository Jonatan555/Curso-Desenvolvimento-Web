// Avaliação JavaScript


// Questão 1 (Tipos de Dados):
// Declare como variáveis ​​variáveis ​​e atribua os valores por tipo: Sting, Number, Boolean, Function, Array, Object

// // String
let nome = "Bard";

// // Number
let idade = 30;

// // Boolean
let ativo = true;

// // Function
let soma = (a, b) => a + b;

// // Array
let carros = ["Fiat", "Volkswagen", "Chevrolet"];

// // Object
let pessoa = {nome: "idade"};


// Questão 2 (Operadores):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

// let a = 12;
// let b = 3;

// // Soma
// console.log(a + b); // 15

// // Subtraçao
// console.log(a - b); // 9

// // Multiplicaçao
// console.log(a * b); // 36

// // Divisao
// console.log(a / b); // 4

// // Resto da divisao
// console.log(a % b); // 0

// // Potenciaçao
// console.log(a ** b); // 1728

console.log(Math.sqrt(144));

// Questão 3 (Funções):
// Crie e execute uma função de nome 'test" que retorna "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.
  
// Função "test":
function test(valor) {
    return "JavasSript" + valor;
}
// Execuçao da Função:
let resultado = test("Hello, world!");

console.log(resultado); // "JavacSriptHello, world!"

// saida:
// JavaScriptHello, world!

// Questão 4 (Manipulação de Dados):
// Usando os métodos FIFO e LIFO, crie um array com 3 valores e posteriormente insira mais um valor no final e substitua o do início por outro.

// // Array FiFo
const arrayFiFo = [ "a", "b", "c"];

// Insira um valor no final
arrayFiFo.push("d");

// Substitua o valor do inicio
arrayFiFo[0] = "e";

console.log(arrayFiFo); // ["e", "b", "c", "d"]

// Array LIFO
const ArrayLiFO = ["a", "b", "c"];

// Insira um valor no final
arrayLiFO.unshift("d");

// Substitua o valor do inicio
arrayLiFO.shift();

console.log(arrayLiFO); // ["d", "b", "c"]

// Questão 5 (para):
// Liste todos os valores do array criado na questão anterior ultilizando o for.
 
// Array FIFO
const arrayFiFo = ["a", "b", "c"];

// Insira um valor no final
arrayFiFo.push("d");

// Substitua o valor do inicio
arrayFiFo[0] = "e";

// Liste todos os valores do array
for (let i = 0; i < arrayFiFo.length; i++) {
    console.log(arrayFiFo[i]);
}

// Array LIFO 
const arrayLiFO = ["a","b", "c",];

// Insira um valor no final
arrayLiFO.unshift("d");

// Substitua o valor do inicio
arrayLiFO.shift();

// Liste todos os valores do array
for (let i = arrayLiFO.length - 1; i >= 0; i--) {
    console.log(arrayLiFO[i]);
}

    // Questão 6 (while):
    // Escreva os números de 0 a 500 sem os que pertencem à família do 200 e do 300:


    // 200-299
    // 300-399

    //0-199
    // 400-500

    /*

    let count = 0;
    while(count <= 500){
        if (count < 200 || count >= 400){
            console.log(count)
        }
        count++
    }



// Questão 7 (se):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

const velocidade = 80;

if (velocidade > 60) {
    console.log("Multado");
} else if (velocidade < 60 / 2) {
    console.log("Multado");
} else {
    console.log("Não recebeu multa");
}

// Questão 8 (métodos de array):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo está uma lista com todas as atualizações atuais de cada um deles
// Apresente os novos movimentos e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

const newsalary = salary.map((salary) => salary * 1.1);
console.log(newSalary);

const sumNewSalary = newSalary.reduce((a, b) => a + b);
console.log(sumNewSalary);

