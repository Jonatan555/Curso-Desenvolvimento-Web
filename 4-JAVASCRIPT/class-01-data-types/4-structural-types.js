//object

let namestudent = "Jontan"
let age = 30
let profission = "Web Developer /n data Analyst" 

console.log(profission);

let student = {
    name:"Jonatan",
    age: 18,
    profission:"Web Developer",
    action: () => "Estudou!",
    special: () => "hydropump",
}

    console.log(student);
    console.log(typeof student);
    console.log(student.name)
    console.log(student.age);
    console.log(student["profission"]);
    console.log(student.action());

    // Array (vector)

    // let pokedex = ["charmander",6,"bulbasour",5,"squirtle",4];
    let pokedex  = [
            {nome: "Charmander", level: 6},
            {nome: "Bulbasour", level: 5},
            {nome: "Squirtle", level: 4},
             
    ];
        

    console.log(pokedex);
    console.log(typeof pokedex);
    console.log(pokedex[0]);
    console.log(pokedex[2]);
    console.log(pokedex[1]);
    