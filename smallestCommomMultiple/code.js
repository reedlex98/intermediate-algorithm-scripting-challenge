
function smallestCommons(arr) {
  const minorLimit = Math.min(...arr)
  const majorLimit = Math.max(...arr)
  let num = majorLimit - 1
  let boolFlag = []
  do{
    boolFlag = []
    num++
    for(let i = minorLimit; i<= majorLimit; i++){
      boolFlag.push(num%i===0?1:0)
    }
  }while(boolFlag.indexOf(0)>=0)
  return num;
}


console.log(smallestCommons([23,18]));