function checkAllNumber(arr) {
    return arr.some(value => Array.isArray(value) || typeof value !== typeof 1)
}

function addTogether() {
    if (checkAllNumber([...arguments])) return

    if ([...arguments].length == 2)
        return arguments[0] + arguments[1]

    else if ([...arguments].length == 1) {
        let num = arguments[0]
        return function addTogether(anotherNum) {
            if (checkAllNumber([anotherNum])) return
            return num + anotherNum
        }
    } else
        return
}
console.log(addTogether(1, 9))