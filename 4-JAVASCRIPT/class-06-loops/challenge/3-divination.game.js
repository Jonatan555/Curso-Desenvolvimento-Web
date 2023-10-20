   
   
        const randomNumber = Math.ceil(Math.random() * 10);
        let countTry = 1;

    while (true) {
        const guessNumberUser = prompt("Adivinhe um numero de 1 a 10");
        console.log(guessNumberUser);

        if (guessNumberUser === null) {
            alert("programa encerrado!");
            break;
        }

        if  (guessNumberUser < 1 || guessNumberUser > 10) {
            alert("Atençao, numero de 1 a 10");
        }
    
        if (guessNumberUser === "" || isNaN(guessNumberUser)) {
            alert("insira um numero de 1 a 10");
            continue;
        }

        const gameOver = Number(guessNumberUser) === randomNumber;
        if (gameOver) {
            alert(`Parabens voce acertou em ${countTry} tentativa(s)`)
            break;
        }

        countTry++;
}
