const even = function(number) {
    if (number % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

if (even(8)) {
    console.log(`is even`)
}
else {
    console.log(`is odd`)
}