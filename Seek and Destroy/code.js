// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

/* First resolution, not much functional...
function destroyer(arr) {
    for (let argument of arguments)
        for(let element of arr)
            if(argument === element)
                arr.splice(arr.indexOf(element),1)
    return arr
}
*/
function destroyer(arr) {
    return arr.filter(element => ![...arguments].includes(element))
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));