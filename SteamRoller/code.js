function verifyArray(value) {
    return Array.isArray(value)
}
function flattenArray(arr) {
    const newArr = []
    for (let elem of arr) {
        if (verifyArray(elem))
            return flattenArray(elem)
        else
            newArr.push(elem)
    }
    return newArr
}
function steamrollArray(arr) {
    // I'm a steamroller, baby
}

steamrollArray([1, [2], [3, [[4]]]]);
console.log(verifyArray([1, 2, 4]))
console.log(Array.isArray([1]))
console.log(flattenArray([1, [3, [[4]]]]))
console.log('bob')