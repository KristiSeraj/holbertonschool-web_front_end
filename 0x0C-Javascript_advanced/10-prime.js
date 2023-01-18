function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i == j) {
                count++;
                break;
            }
            if (j * j - 1 > i) {
                break;
            }
            if (i % j == 0) {
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(countPrimeNumbers() * 100)

console.log(`Execution time of calculating prime numbers 100 times was ${performance.now()} milliseconds.`)