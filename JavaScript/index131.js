const femaleStudents = ['mack', 'morgan', 'carolyn', 'elaine', 'marlene']
const maleStudents = ['tom', 'jerry', 'johnny', 'wyatt', 'bob']
let students = femaleStudents.concat(maleStudents)


console.log(femaleStudents[0])
console.log(femaleStudents[1])
console.log(femaleStudents[2])
console.log(femaleStudents[3])
console.log(femaleStudents[4])
console.log(femaleStudents[5])

let number = 5
while (number > 0) {
    console.log(maleStudents[number])
    number--
}

for (count = students.length; count > 0; count--) {
    console.log(students[count])
}
