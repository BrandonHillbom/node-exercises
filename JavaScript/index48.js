let message = "3.14 it's a great number but 42 it's the answer to life."
let pi = parseFloat(message.substr(0,4))
let answerToLife = parseInt(message.substr(29, 2))
let result = pi + answerToLife
let result2= result.toString()
console.log(`${result2} is the result of adding pi and answerToLife`)