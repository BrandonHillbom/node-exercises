const numbers = []

for (count = 1000; count >= 0; count --) {
    numbers[count] = count
  }
  const even = numbers.filter(function(number) {
      if (number % 2 === 0 || number === 0) {
          return number
      }
  })
  const odd = numbers.filter(function(number) {
    if (number % 2 === 1 || number === 1) {
        return number
    }
})
for (count = 0; count < 20; count++) {
    console.log(even[count])
}
for (count = 0; count < 10; count++) {
    console.log(odd[count])
}