const biggerNumber = function (firstNumber, secondNumber) {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        console.log(`error: Please input numbers`)
    }
    else {
        if (firstNumber > secondNumber) {
            console.log(`${firstNumber} is larger than ${secondNumber}`)
            console.log(typeof firstNumber, typeof secondNumber)
        }
        else if (secondNumber > firstNumber) {
            console.log(`${secondNumber} is larger than ${firstNumber}`)
            console.log(typeof firstNumber, typeof secondNumber)
        }
        else if (firstNumber == secondNumber) {
            console.log(`Both numbers are ${firstNumber}`)
            console.log(typeof firstNumber, typeof secondNumber)
        }
    }

}
biggerNumber(5, 5)