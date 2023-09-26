let myName = "Jonatan"

console.log(myName._proto_);
console.log(myName.length);
console.log(myName [1]);
console.log(myName.toLocaleUpperCase());
console.log(myName.toLocaleUpperCase());
console.log(myName.toUpperCase());

console.log(myName[1] =="J"); // string immutable
console.log(myName = "outra coisa");
console.log();

let phrase = "Im a web developer"

console.log(phrase.split(" ")[2] = "WEB");
console.log(typeof phrase);

console.log(phrase.split("").reverse().join(""));

console.log(phrase.replace("web","WEB"));
console.log(phrase);

console.log(phrase.indexOf(""));
console.log(phrase);
console.log(phrase.trim());
console.log(phrase.substring(5));

console.log(phrase.includes("web"));
console.log("web" == "web"); // case-sensitive
console.log(phrase.toLocaleLowerCase().includes("web") ? "Teste Verdadeiro":"Teste Falso");

const consoles = {
    log: () => {
        return "imprimir";
    },
    error: () => {
        return "imprimir error";
    },
}


consoles.log("test");
console.error();
console.error();