import { question } from 'readline-sync';
//user input from user in terminal
// const userid = question("Enter UserId: ");
// random number in typescript
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//   console.log(getRandomInt(3));
// expected output: 0, 1 or 2
// Game Variables
const enemies = ["skeleton", 'zombie', 'warrior', 'assassin'];
const maxEnemyHealth = 75;
const enemyAttacDamage = 25;
// Player Variables
let health = 100;
const attackDamage = 50;
let numHealthPotions = 3;
const healthPotoionHealAmount = 30;
const healthPotoionDropChance = 50;
const running = true;
console.log('\n|*******************************|\n|\t\t\t\t|');
console.log("|     Welcome to the Dungeon    |\n|\t\t\t\t|");
console.log('|*******************************|');
while (running) {
    console.log("---------------------------------");
    let enemyHealth = getRandomInt(maxEnemyHealth);
    let enemy = enemies[getRandomInt(enemies.length)];
    console.log(`\t# ${enemy} has appeared! #\n`);
    while (enemyHealth > 0) {
        console.log(`\t Your HP: ${health}`);
        console.log(`\t ${enemy}'s HP: ${enemyHealth}`);
        console.log(`\n\tWhat would you like to do ? `);
        console.log(`\t1. Attack`);
        console.log(`\t2. Drink health Potion`);
        console.log(`\t3. Run!`);
        let input = question();
        if (input === '1') {
            let damageDealt = getRandomInt(attackDamage);
            let damageTaken = getRandomInt(enemyAttacDamage);
            enemyHealth -= damageDealt;
            health -= damageTaken;
            console.log(`\t> You strike the ${enemy} for ${damageDealt} damage.`);
            console.log(`\t> You recieve ${damageTaken} in retaliation!`);
            if (health < 1) {
                console.log('\t> You have taken too much damage, you are too weak to go on!');
                ;
                break;
            }
        }
        else if (input === '2') {
            if (numHealthPotions > 0) {
                health += healthPotoionHealAmount;
                numHealthPotions--;
                console.log(`\t> You drink a health potion, healing yourself for ${healthPotoionHealAmount}
                \n\t You now have ${health} HP.
                \n\t You have ${numHealthPotions} health potions left.\n`);
            }
            else {
                console.log('\t> You have no health potions left! Defeat enemies for a chance to get one!');
            }
        }
        else if (input === '3') {
            console.log(`\t You run away from the ${enemy}!`);
        }
        else {
            console.log('\tInvalid command!');
        }
    }
    if (health < 1) {
        console.log('you limp out of the dungeon, you are too weak from battal.');
        break;
    }
    console.log("---------------------------------");
    console.log(` # ${enemy} was defeated! #`);
    console.log(` # You have ${health} HP left.`);
    if (getRandomInt(100) > healthPotoionDropChance) {
        numHealthPotions++;
        console.log(` # the ${enemy} dropped a health potion! #`);
        console.log(` # You now have ${numHealthPotions} health potion(s). #`);
    }
    console.log("---------------------------------");
    console.log('What would you like to do now?');
    console.log('1. Continue fighting');
    console.log('2. Exit Dungeon');
    let input = question();
    while (input !== '1' && input !== '2') {
        console.log('Invalid Command!');
        input = question();
    }
    if (input === '1') {
        console.log('You continue on your adventure');
    }
    else if (input === '2') {
        console.log('You exit the dungeon, successful from your adventures!');
        break;
    }
}
console.log('\n#################################');
console.log('#\t\t\t\t#');
console.log('# \tTHANKS FOR PLAYING      #');
console.log('#\t\t\t\t#');
console.log('#################################\n');
