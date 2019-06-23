function sumPrimes(num) {
    let divisibleByOthers = false
    let sum = 0
    for (let i = 0; i <= num; i++) {
        divisibleByOthers = false
        for (let j = i; j > 0; j--) {
            if (i % j === 0 && j !== i && j !== 1)
                divisibleByOthers = true
        }
        if (!divisibleByOthers && i > 1)
            sum += i
    }
   console.log(sum)
    return sum;
}

sumPrimes(977)