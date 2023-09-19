let num = "Global";
const PI = 3.14

console.log(num);
console.log(PI);

{
    let num = "local"      
    const PI = 5;
    
    console.log(num);
    console.log(PI);
}

console.log(num);
console.log(PI);
