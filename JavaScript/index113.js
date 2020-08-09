const getShapePerimiter = function(base, height) {
    if (base == height) {
        perimeter = 4 * base
        return perimeter
    }
    else if (base != height) {
        perimeter = (2 * base) + (2 * height)
        return perimeter
    }
}
getShapePerimiter(4, 8)

console.log(`${perimeter} is the shape perimeter`)

if (perimeter > 100) {
    console.log(`The perimeter is too big`)
}
else {
    console.log(`The perimeter is fine`)
}