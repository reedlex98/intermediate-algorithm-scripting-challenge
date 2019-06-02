// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
    let sum=0
    for ( let minor = Math.min(arr[0],arr[1]); minor <= Math.max(arr[0], arr[1]);minor++)
        sum+=minor
    return sum;
  }
  
  console.log(sumAll([1, 4]));