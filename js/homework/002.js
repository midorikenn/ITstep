function isPrime(number) {
    for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

function factors(num) {
    let num_factors = [];
    for (let i = 0; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            num_factors.push(i);
            if (num / i !== i) {
                num_factors.push(num / i);
            }
        }
    }
    num_factors.sort((a, b) => a - b);
    return num_factors;
}

console.log(isPrime(12));
console.log(factors(15));

