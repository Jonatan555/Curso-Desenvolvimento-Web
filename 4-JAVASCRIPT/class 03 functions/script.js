function average(grade1, grade2 /* parameters */) {

    const result = (grade1 + grade2) / 2
    
    document.write(`${result} <br>`);
}

 average(3, 7); // Argument
 average(8, 9);
 average(7, 6); 
 average(3, 2); 

 const add = function (num1, num2) {
    return num1 + num2
 }

 console.log(add(2,3));


 // arrow

const mult = (num1 + num2) => {
    return num1 * num2
 }

 console.log(mult(2, 3));