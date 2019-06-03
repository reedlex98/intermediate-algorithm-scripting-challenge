// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function verifyOccurrency(a , b) {
    const diffArray = []
    for (let item of a)
        if(!b.includes(item))
            diffArray.push(item)
    return diffArray
}

function diffArray(arr1, arr2) {
    return [].concat(verifyOccurrency(arr1,arr2),verifyOccurrency(arr2,arr1))
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));