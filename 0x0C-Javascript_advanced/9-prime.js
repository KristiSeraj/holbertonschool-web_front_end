function countPrimeNumbers() {
    for (let n = 1; n <= 100; n++) {
        let c = 0;
        for (let i = 2; i < (n / 2 + 1); i++) {
            if (n % i == 0) {
                c += c;
            }
        }
        return c;
    }
}