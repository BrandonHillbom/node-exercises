const weekdayNumber = 5
let message = null

switch (weekdayNumber) {
    case 1:
        message = 'Today it\'s Monday'
        break
        case 2:
        message = 'Today it\'s Tuesday'
        break
        case 3:
        message = 'Today it\'s Wednesday'
        break
        case 4:
        message = 'Today it\'s Thursday'
        break
        case 5:
        message = 'Today it\'s Friday'
        break
        case 6:
        message = 'Today it\'s Saturday'
        break
        case 7:
        message = 'Today it\'s Sunday'
        break
}
if (7 < weekdayNumber < 1) {
    console.log(message)
}
else {
    console.log(`Error: Please input a number bettwen 1 and 7`)
}