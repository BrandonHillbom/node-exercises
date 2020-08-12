const user = {
    username: 'batman',
    password: 'Alfred1960KPO!'
}
const shouldOpenBatCave = function(Login) {
    if (user.username == 'batman' && user.password == 'Alfred1960KPO!')
    {
        return true
    }
    else {
        return false
    }
}
shouldOpenBatCave(user)

if (shouldOpenBatCave() == true) {
    console.log(`Welcome back batman!!`)
}
else {
    console.log(`Sorry, you can't enter the Batcave, try again...`)
}