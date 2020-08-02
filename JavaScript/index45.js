let playerName = "Darian Durant is lame"
let teams = "BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers"
let message = "Regina is the best Canadian city, Go Riders"

let playerNameResult = playerName.slice(0, 16)
let teamsResult = teams.slice(66,67).toUpperCase() + teams.slice(67,72)
let message1 = message.slice(10,18)
let message2 = message.slice(32,36)
let name = playerNameResult.toUpperCase()


console.log(`${name} ${message1} ${teamsResult} player${message2} ${teamsResult}`)
