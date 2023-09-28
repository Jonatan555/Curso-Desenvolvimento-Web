const myArray = Array("A" , 1, () => "A");

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[2]());
console.log(myArray.join("-"));

const myName = "Jonatan",

console.log(myName.split("").reverse().join(""));

const arrayTechs = ["HTML", "CSS", "GIT"];

arrayTechs.push("JavaScript");
arrayTechs.push("So acredito veno");

arrayTechs.pop()
const removeltem = arrayTechs.pop() // fifo
console.log(removeltem + " foi removido com sucesso");
const removeltemStart = arrayTechs.shift()
console.log(removeltemStart + "foi removido com sucesso");

arrayTechs.unshift("React")
arrayTechs.unshift("SQL")

console.log(arrayTechs);

console.log(arrayTechs.includes("Javascript"));
console.log("A" == "a");

console.log(arrayTechs.indexOf("GIT")); // -1 not exist

console.log(arrayTechs.keys());

console.log(arrayTechs.slice[1, 4]);
console.log(arrayTechs.slice[-3, -1]);

console.log(arrayTechs.splice(-1));

console.log(arrayTechs.splice(-2));

console.log(arrayTechs);

console.log(myArray.concat(arrayTechs));