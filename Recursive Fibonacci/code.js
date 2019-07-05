const fb = n => {
    const termList = []
    for (let i = 0; i < n; i++) {
        i <= 1 ?
            termList.push(1) :
            termList.push(termList[i - 1] + termList[i - 2])
    }
    return termList
}
const fbRecursive = (n, termList = [], count = -1) => {
    count++
    if (count < n) {
        termList.push(count <= 1 ? 1 : termList[count - 1] + termList[count - 2])
        return fbRecursive(n, termList, count)
    }
    return termList
}

console.log(fbRecursive(20))