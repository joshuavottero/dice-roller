// make function called rollDice
// check if thrid arg is a number
// if not a number return an error
// make for loop limted by dice rolls from terminal 3 arg
// gen a number from 1 to 6
// add number to a string
// add " ," if not last roll

const rollDice = function(rolls) {
  if (isNaN(rolls)) {
    return "Error number of rolls not given";
  }
  let rollString = "Rolled " + rolls + " dice: ";
  for (let i = 0; i < rolls; i++) {
    let roll = Math.floor(Math.random() * 6 + 1);
    rollString += roll;
    if (i !== rolls - 1) {
      rollString += ", ";
    }
  }
  return rollString;
};
const args = process.argv;
console.log(rollDice(Number(args[2])));
