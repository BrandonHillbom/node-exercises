let sum = 0
for (let number = 0; number <= 1000; number++) {
   if (sum <= 400) {
    sum += number
   } 
   else {
       break
   }
}
console.log(sum)