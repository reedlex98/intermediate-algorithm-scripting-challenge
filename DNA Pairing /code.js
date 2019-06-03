/*
Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    const pairedElements = []
    for (let char of str)
        switch (char) {
            case 'A':
                pairedElements.push([char, 'T'])
                break
            case 'T':
                pairedElements.push([char, 'A'])
                break
            case 'G':
                pairedElements.push([char, 'C'])
                break
            case 'C':
                pairedElements.push([char, 'G'])
                break
        }
    return pairedElements
}

console.log(pairElement("GCG"));