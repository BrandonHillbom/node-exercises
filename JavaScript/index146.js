const user = {
    username: 'batman',
    password: 'Alfred1960KPO!'
}
const shouldOpenBatCave = function (username1, password1) {
    if (username1 == 'batman' && password1 == 'Alfred1960KPO!')
    {
        return true
    }
    else {
        return false
    }
}
shouldOpenBatCave(user.username, user.password)

if (shouldOpenBatCave() == true) {
    console.log(`Welcome back batman!!`)
}
else {
    console.log(`Sorry, you can't enter the Batcave, try again...`)
}