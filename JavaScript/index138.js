const mutants = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Magneto',
'Beast',
'Phoenix',
'Logan',
'Gambit']
console.log(mutants)

for (count = 0; count < mutants.length; count++) {
    if (mutants.indexOf('Professor X') == count) {
       mutants[count] = '<3 Professor X'
      }
    else if (mutants.indexOf('Logan') == count) {
        mutants[count] = '<3 Logan'
      }
    else if (mutants.indexOf('Phoenix') == count) {
        mutants[count] = '<3 Phoenix'
      }
    else if (mutants.indexOf('Gambit') == count) {
        mutants[count] = '<3 Gambit'
      }
}
console.log(mutants)