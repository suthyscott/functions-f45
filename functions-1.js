// console.log('hello world')

let jonSnowHealth = 100

// let jonSnowHealthBool = Boolean(jonSnowHealth)

// let jonSnowHealthNum = Number(jonSnowHealth)
// let jonSnowHealthNum = parseInt(jonSnowHealth)
// let jonSnowHealthNum = +jonSnowHealth
// console.log(jonSnowHealth + ' health')

const jamieName = "Jamie"
const jonName = "Jon"

let theWinnerIs = "Jamie is the winner"

let newWinner = theWinnerIs.replace(jamieName, jonName)
// console.log(newWinner)
// let noIs = theWinnerIs.replaceAll('i', 'boo')

// if(newWinner.includes(jonName)){
//     console.log('The winner has been updated')
// } else {
//     console.log('Jamie is still the victor')
// }

// if(newWinner.toLowerCase().startsWith('jon')){
//     console.log('The string starts with jon')
// } else {
//     console.log("The string doesn't start with Jon")
// }

// UpperCamelCase
// lowerCamelCase
// snake_case
// kebab-case

// Convert the newWinner string to all lowercase kebab case using split and join
// let newWinnerLowerCase = newWinner.toLowerCase()
// console.log(newWinnerLowerCase)
// let newWinnerSplit = newWinnerLowerCase.split(' ')
// console.log(newWinnerSplit)
// let newWinnerKebab = newWinnerSplit.join('-')
// console.log(newWinnerKebab)

function isJonAlive() {
    if (jonSnowHealth > 0) {
        console.log(`Jon is alive and has ${jonSnowHealth} health.`)
    } else {
        console.log("Jon is perished.")
    }
}

const isJonAliveArrowFunc = () => {
    if (jonSnowHealth > 0) {
        console.log(`Jon is alive and has ${jonSnowHealth} health.`)
    } else {
        console.log("Jon is perished.")
    }
}

isJonAlive()

// Write a function 'surpriseAttack' that takes in an attack value and subtracts it from Jon's health

const dothraki = 20
const lannisterGuard = 12
const bandits = 6

function surpriseAttack(attackVal) {
    jonSnowHealth -= attackVal
    isJonAlive()
}

// const surpriseAttackArrowFunc = (attackVal) => {
//     jonSnowHealth -= attackVal
// }

// surpriseAttack(dothraki)

// surpriseAttack(lannisterGuard)

// surpriseAttack(bandits)

// arrow function called greeting that takes two parameters which will be people's names and has one person greet the other.
const greeting = (person1, person2, person3) => {
    console.log(
        `${person1} says hi to ${person2} while ${person3} is listening`
    )
}

// greeting('Ned Stark', "Jon Snow", 3)
// greeting('Scott', "Joely")

function rollDice() {
    const possibleRolls = [1, 2, 3, 4, 5, 6]

    let randomNumber = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomNumber]
}

const diceMultiplier = () => {
    const firstRoll = rollDice()
    const secondRoll = rollDice()
    console.log(firstRoll, secondRoll)
    return firstRoll * secondRoll
}

console.log(firstRoll, secondRoll)

console.log(diceMultiplier())
