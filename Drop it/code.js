
// Intermediate Algorithm Scripting: Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function dropElements(arr, func) {
    const newArr = []
    for(let elem of arr) {
      if (func(elem)) {
        newArr.push(...arr.slice(arr.indexOf(elem)))
        break
      }
    }
    console.log(newArr)
    return newArr;
  }
  dropElements([1, 2, 3, 4], function (n) { return n > 1; });