let mutants = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Magneto',
'Beast',
'Phoenix',
'Logan',
'Gambit']

let newMutants = mutants.filter(function(removed) {
    for (count = 0; count < mutants.length; count++) {
        if (mutants[count] != 'Magneto' || mutants[count] != 'Iceman' || mutants[count] != 'Gambit') {
            return mutants[count]
        }
    }
  })
console.log(newMutants)