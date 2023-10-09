function studentAverage(grade1, grade2){
    return (grade1 + grade2) / 2
}

const average = studentAverage(2, 3);
console.log(average);
 
if(average >= 7){
console.log("Aprovado");
} else if (average >=4) {
    console.log("recuperaçao");
} else {
console.log("Reprovado");
}