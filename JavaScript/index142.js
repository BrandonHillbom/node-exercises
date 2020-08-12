const firstPerson = ['Brandon ', 'Hillbom ', '123 rocky road ', 19]
const secondPerson = ['Tristan ', 'Brace ', '456 driving lane ', 18]

const stringFirst = firstPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  const stringSecond = secondPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  if (stringFirst == stringSecond) {
    console.log(`Person's info: ${stringFirst}`)
  }
  else if (stringFirst != stringSecond) {
      console.log(`First person's info: ${stringFirst}`)
      console.log(`Second person's info: ${stringSecond}`)
  }