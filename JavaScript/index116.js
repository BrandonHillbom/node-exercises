const getHexaColor = function(colour) {
    if (colour == 'white') {
        return '#FFFFFF'
    }
    if (colour == 'black') {
        return '#000000'
    }
    if (colour == 'blue') {
        return '#0b24fb'
    }
    if (colour == 'green') {
        return '#0e7e12'
    }
    if (colour == 'yellow') {
        return '#fffd38'
    }
    if (colour == 'pink') {
        return '#fec1cc'
    }
}
console.log(`hexa colour is ${getHexaColor('pink')}`)