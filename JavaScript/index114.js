const revert = function(string) {
    for (let count = string.length; count >= 0; count --)
    console.log(string.charAt(count))
}
revert('hello')
revert('wow')
revert('how are you')
revert('hi')
revert(':)')