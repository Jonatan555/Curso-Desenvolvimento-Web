function degreeconvert(degree) {
    const degreeAux = degree.split("").join("");
    const arrayDegree = Array.from(degreeAux); 
    const scaleDegree = arrayDegree.pop().toUpperCase();
    const newDegree = Number (arrayDegree.join(""));

    if (isNaN(newDegree)) throw new Error("Valor invalido!");

    function convertCelsiusToFahrenheit() {
        return (newDegree * 9) / 5 + 32;
    }
    function convertfahrenheittoCelsius() {
        return ((newDegree - 32) * 5) / 9;
    }

    switch (scaleDegree) {
        case "C":
            return convertCelsiusToFahrenheit() + "F"
        case "F":
            return convertfahrenheittoCelsius() + "C";
        default:
            throw new Error("Escala nao identificada")
    }
}


try {
    const temperature = "c"
const temperatureConverted = degreeconvert(temperature);
console.log(`${temperature} = ${temperatureConverted}`);
} catch (error) {
    console.error(error);
}

