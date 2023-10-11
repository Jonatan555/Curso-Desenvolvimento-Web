function sequenceFibonacci(amount) {
    if (amount <= 0) return null;
    if (amount === 1) return 0;

    const array = [0, 1];

    for(let i = 2; i <= amount;i++) {
     array[i] = array[i - 1] + array[i - 2];
    }
    return array;
}

    const amount = 5;

    document.write(sequenceFibonacci(amount));