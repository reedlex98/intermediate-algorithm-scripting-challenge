function sumFibs(num){
    const fibonacci = []
    let sum = 0
    let fib = 0
    while(fib<=num){
      if (fib%2 !== 0){
        sum+=fib
      }
      fib = fibonacci.length < 2 ? 1 : fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2]
      fibonacci.push(fib)
    }
    return sum
    
  }
  
  console.log(sumFibs(10));