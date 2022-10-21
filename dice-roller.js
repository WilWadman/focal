// we need to add process.argv and slice off the 2 first array elements
// we need to declare our function name
// we need to loop through the CLI input so that the number added via the CL is the number of times the dice is rolled
// we need to declare a variable that creates the rolled number
// we need to output a message for each dice roll to the user
// we need to call the function to get the input from CL to the right place
const args = process.argv;
let num = args.slice(2);

const getDiceRoll = function(number) {
  for( let i = 1; i <= number; i++) {
    let rolledNumber = Math.floor(Math.random()* 6) + 1;
    console.log(` You rolled a ${rolledNumber}`);
}

}

getDiceRoll(num);