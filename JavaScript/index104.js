let fibonacci = function() {
let f= 0
let f1= -1
let f2= 1

for (let n = 10; n > 0; n--) {
    f = f1 + f2
    f1 = f2
    f2 = f
    console.log(f)
}
}
for (let count = 0; count < 3; count++) {
    fibonacci()
}