const arrayNumbers = Array.from({length: 25}, (Value, index) => index + 1).sort(() => Math.random() - 0.5).filter((Value, index) => index < 15)
.sort((a, b) => a - b).join("-");

console.log(arrayNumbers);