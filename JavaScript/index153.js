const arithmetic = {
    add: function(number1, number2) {
        if (typeof(this.add == 'number')) {
            let result = number1 + number2
            console.log(`${number1} + ${number2} = ${result}`)
        }
        else {
            console.log(`Please input numbers to add`)
        }
},
    subtract: function(number1, number2) {
        if (typeof(this.subtract == 'number')) {
            let result = number1 - number2
            console.log(`${number1} - ${number2} = ${result}`)
        }
        else {
            console.log(`Please input numbers to subtract`)
        }
},
    multiply: function(number1, number2) {
        if (typeof(this.multiply == 'number')) {
            let result = number1 * number2
            console.log(`${number1} x ${number2} = ${result}`)
        }
        else {
            console.log(`Please input numbers to multiply`)
        }
},
    divide: function(number1, number2) {
        if (typeof(this.divide == 'number')) {
            let result = number1 / number2
            console.log(`${number1} / ${number2} = ${result}`)
        }
        else {
            console.log(`Please input numbers to divide`)
        }
},
    remainder: function(number1, number2) {
        if (typeof(this.remainder == 'number')) {
            let result = number1 % number2
            console.log(`${number1} % ${number2} = ${result}`)
        }
        else {
            console.log(`Please input numbers to find the remainder`)
        }
}
}
arithmetic.add(2, 10)
arithmetic.subtract(10, 5)
arithmetic.multiply(3, 100)
arithmetic.divide(40, 2)
arithmetic.remainder(20, 2)