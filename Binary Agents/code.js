function convertToDecimal(binary) {
    let newArr = binary.split('')
    return newArr.reduce((prev, curr, index) => {
        return prev + parseInt(curr) * (Math.pow(2, newArr.length - index - 1))
    }, 0)
}

function convertToWord(decimal) {
    return ''.concat(String.fromCharCode(decimal))
}

function binaryAgente(str) {
    return str.split(' ').map(value => {
        return convertToWord(convertToDecimal(value))
    }).join('')
}
console.log(binaryAgente("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))