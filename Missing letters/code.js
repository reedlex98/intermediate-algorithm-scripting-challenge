/*
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined
*/

function fearNotLetter(str) {
    for (let index in str)
        if(index>0)
            if(str.charCodeAt(index)-str.charCodeAt(index-1)>1)
                return String.fromCharCode(str.charCodeAt(index)-1)
    return undefined
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));