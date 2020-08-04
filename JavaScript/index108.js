const sort = function (number1, number2, number3, highToLow) {

    if (number1 > number2 && number2 > number3) {
        if (highToLow == true) {
            console.log(`${number1}, ${number2}, ${number3}`)
        }
        else {
            console.log(`${number3}, ${number2}, ${number1}`)
        }
    }

    else if (number2 > number1 && number3 > number1 && number2 > number3) {
        if (highToLow == true) {
            console.log(`${number2}, ${number3}, ${number1}`)
        }
        else {
            console.log(`${number1}, ${number3}, ${number2}`)
        }
    }

    else if (number3 > number1 && number1 > number2 && number2 > number1) {
        if (highToLow == true) {
            console.log(`${number3}, ${number2}, ${number1}`)
        }
        else {
            console.log(`${number1}, ${number2}, ${number3}`)
        }
    }

    else if (number2 > number1 && number1 > number3) {
        if (highToLow == true) {
        console.log(`${number2}, ${number1}, ${number3}`)
        }
        else {
            console.log(`${number3}, ${number1}, ${number2}`)
        }
    }

    else if (number3 > number1 && number1 > number2) {
        if (highToLow == true) {
        console.log(`${number3}, ${number1}, ${number2}`)
    }
    else {
        console.log(`${number2}, ${number1}, ${number3}`)
    }
}

}
sort(10, 18, 2, false)