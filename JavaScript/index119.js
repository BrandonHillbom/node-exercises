const data = [42, true, function() {return 'The meaning of life is: '}]
const meaning = data[2]
if (data[1] == true) {
    let result = meaning() + data[0]
    console.log(result)
}