// Put your code here

console.log("Let's roll the dice!");
console.log("---------------------------");

// function that will randomize a number between 1-6.
const diceRoll = (min, max) => {
    // creating the value for the min
    min = Math.ceil(1);
    max = Math.ceil(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create the fucntion that will generate the scores
// if the random numbers generated give us a double make a point to mention 
for (let i = 0; i < 10; i++) {
    let oneDice = diceRoll()
    let twoDice = diceRoll()

    let score = `${oneDice} + ${twoDice} = ${oneDice + twoDice}`
        if (oneDice === twoDice) {
            score += "Double the Trouble"
        }
        console.log(score)
};