function convertMstokmh( speed) {
    return speed * 3.6;
}

const userspeed = prompt("Digite a velocidade:");
const convertedspeed = convertMstokmh(userspeed)
document.write(convertMstokmh(userspeed) + "km/h")