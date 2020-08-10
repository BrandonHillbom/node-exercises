const numbers = []

for (count = 0; count < 1001; count ++) {
    numbers[count] = count 
const numbersTen = numbers.map(function(add) {
    add = count + 10
    return add
  });
  console.log(`index: ${count}, original number: ${numbers[count]}, incremented value: ${numbersTen[count]}`)
}