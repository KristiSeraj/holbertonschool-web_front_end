function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        for (let j = 2; j <= i; j++) {
            if (i == j) {
                count++;
                break;
            }
            if (j * (j - 1) > i) {
                count++;
                break;
            }
            if (i % j == 0) {
                break;
            }
        }
    }
    return count;
}
let t0 = performance.now()
console.log(countPrimeNumbers())
let t1 = performance.now()

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`)