    class Brush {
    constructor(color, height) {
        this.colorName = color;
        this.height = height;
    }

    action() {
        console.log("Escreve");
    }
    }

    const blueBrush = new Brush("Azul", 10);
    const redBrush = new Brush("Vermelho", 12);
    console.log(blueBrush);

    redBrush.action();

    console.log(blueBrush.colorName);
    console.log(redBrush.colorName);

    console.log(blueBrush.height);
    console.log(redBrush.height);