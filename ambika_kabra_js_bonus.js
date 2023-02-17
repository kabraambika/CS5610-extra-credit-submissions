/* 
    Create a dice rolling function to help me play Dungeons and Dragons!
    Your input will contain one string, where each input will be in the form of "NdM"
    The first number is the number of dice to roll, the d just means "dice", it's just used to split up the two numbers, and the second number is how many sides the dice have. So the above example of "3d6" means "roll 3 6-sided dice". 
    Also, just in case you didn't know, in D&D, not all the dice we roll are the normal cubes. A d6 is a cube, because it's a 6-sided die, but a d20 has twenty sides, so it looks a lot closer to a ball than a cube.
    
    The first number, the number of dice to roll, can be any integer between 1 and 100, inclusive.
    The second number, the number of sides of the dice, can be any integer between 2 and 100, inclusive.
 */
function rollDiceForDND(diceInput) {
    let result = 0;

    if(diceInput) {
        const [n, m] = diceInput.split("d").map(Number); // n is for number of dice to roll and m for number of sides of the dice
        if(1 <= n <= 100 && 2 <= m <= 100) {
            for(let diceIndex = 0; diceIndex < n; diceIndex++) {
                //Math.random() * m gives random number between 0(inclusive) and m(exclusive). 
                //Math.floor() will rounds the number into integer
                //Add 1 to the result to shift the range by 1 which becomes 0 to m.
                result = result + Math.floor(Math.random() * m) + 1;
            } 
        }
    }   
    return result;
}

//Random number will appear from 3 to 18 
console.log(rollDiceForDND('3d6'));
