const showNumbers = function(start, end) {
    if (start > end) {
        for (let count = (start - 1); count > end; count--) {
            console.log(`${count}`)
        }
    }
    else if (end > start) {
        for (let count = (start + 1); count < end; count++) {
            console.log(`${count}`)
        }
    }
    else if (start == end) {
        console.log(`There are no numbers in between ${start} since both inputs are the same`)
    }
    else if ((typeof start != 'number') || (typeof end != 'number')) {
        console.log(`Please input a valid number`)
    }
}
showNumbers(12, 0)