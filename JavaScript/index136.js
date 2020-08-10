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
    
    let ice = mutants[mutants.indexOf('Iceman')]
    let wolv = mutants[mutants.indexOf('Logan')]
    let Phoe = mutants[mutants.indexOf('Phoenix')]
    const newMutants = [Phoe, ice, wolv]
    console.log(newMutants.toString());
