function add() {
    let count = 0
    let result = 0
    while (count < add.length) {
        result += arguments[count]
        count++
    }
    return result
}
console.log(add(1,2,3,4,5))
console.log(add(1,2,3,4,5,6,7,8,9,10))