function convertAverageTOABC(average) {
    if (typeof average === "string") {
        average = Number(average.replace(",", "."));
    }


    if (average >= 90 && average <= 100) {
        return "A";
    } else if (average >= 80 && average <= 90){
        return "B";
    }else if (average >= 80 && average <= 70){
        return "C";
    }else if (average >= 60 && average <= 70){
        return "D";
    }else if (average >= 0 && average <= 60){
        return "E";
    
    } else {
        return "media aprovada"
    }
}

const averageStudent = "95,5";
console.log(convertAverageTOABC(averageStudent));

switch (averageStudent) {
    case "A" :
        console.log("Excelente;  aprovado com A!");
        break;
    case "B" :
        console.log("Muito bem, aprovado com B!"); 
        break;
     case "C" :
        console.log("aprovado com C!");    
        break;
        case "D" :
            console.log("reprovado com D");    
            break;
            case "F" :
                console.log("reprovado com f");    
                break;
}