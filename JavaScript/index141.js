const tripExpenses = [90, 150, 100]
const budget = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`)
  console.log(`Total trip budget: ${budget}`)