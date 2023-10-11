function calculteFactor(number) {
    let aux = 1;
 for (let i = number; i > 0; i--) {
  aux *= i;
    }
    return aux;
}

const number = 10;

console.log(calculteFactor(number));