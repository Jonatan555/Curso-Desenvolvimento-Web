function runAplication() {
    return "Running...";
}

try {
  document.write(runApplication());
} catch (error) { // hoisting
    console.error(error);
} finally {
    console.log("Sempre sera executado!!!");
}

document.write("Application is live");

function divideNumbers(num1, num2) {
    if (num2 == 0) {
        throw new Error("Nao possivel dividir por 0 abestado")
    }
    return num1 / num2;
}

console.log(divideNumbers(6, 3));