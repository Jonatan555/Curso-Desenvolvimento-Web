let count = 1; // flag
while (count <= 500) {
    if(count % 2 === 0) {
        console.log();
        // count++;
        // continue;
        // break;
    }
    
    count++; // container
}

count = 0
let noia = 1;
while (noia <= 500) {
    console.log(noia);
    noia = count * 2;
    count++;
}

while (true) {
    let resp = prompt("Deseja encerrar?");
    
    if (resp) {
        alert("Obrigado pela sua visita!")
        break;
    }
}