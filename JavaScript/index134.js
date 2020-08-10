const numbers = []
let add = 0
for (count = 0; count < 1001; count ++) {
        numbers[count] = count 
        add += count 
        console.log(add)
   if (count == 1000 && add == 500500) {
            console.log(`Good Job!!!`)
        }
    else if (count == 1000 && add != 500500) {
            console.log(`Take a look to see if something is wrong`)
        }
}