/*
Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/


function uniteUnique() {
    const finalArray = []
    for(let subArray of arguments)
      for (let subArrayElem of subArray)
        if(finalArray.indexOf(subArrayElem) === -1)
          finalArray.push(subArrayElem)
    console.log(finalArray)
    return finalArray
  }
  
  uniteUnique([1, 2, 3], [5, 2, 1]);
