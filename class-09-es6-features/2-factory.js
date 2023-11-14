function person(name, agge) {
    return {
        name,
        age: age,
        canDrive: age >= 18,
        status: () => {
            if (age > 18) {
                return "pode dirigir";
            } else {
                return "não pode dirigir";
            }
        }
    };
}

console.log(person("Emanuel", 30));
console.log(typeof person("Emanuel" , 30));
console.log(person("pedro", 18));
console.log( person("odilon" , 17));
console.log( person("Neemias" , 21));
console.log( person("Neemias" , 21). status());