let mutants = ['Professor X',
'Cyclops',
'Iceman',
'Angel',
'Magneto',
'Beast',
'Phoenix',
'Logan',
'Gambit']

for (count = 0; count < mutants; count++) {
    console.log(mutants[count])
    if (mutants.indexOf('Magneto') > -1) {
        break
      }
}

mutants = mutants.pop('Magneto')

for (count = 0; count < mutants; count++) {
    console.log(mutants[count])
}
