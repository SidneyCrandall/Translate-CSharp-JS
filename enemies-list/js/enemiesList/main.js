// Put your code here

console.log( "My Enemies: ")
console.log("----------------")

// creating a variable that will hold the object and their values for the function to list enemies
const enemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offensesL: [
            "Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"
        ],
        isReallyHated: true
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        offensesL: [
            "Cut off Luke's hand",
            "Murdered all those kids",
            "Unkind management practices"
        ],
        isReallyHated: false
    },
    {
        firstName: "Betty",
        lastName: "Rudelady",
        offensesL: [
            "Phone calls in the theater",
            "Phone calls on the bus",
            "Phone calls in line at the grocery store",
            "Poor conversationalist"
        ],
        isReallyHated: true
    },
    {
        firstName: "Leon",
        lastName: "Peck",
        offensesL: [
            "Keeps giving me a hotplate"
        ],
        isReallyHated: false
    }
]

// iterate through the array and console log the most hated with a comment
for ( const enemy of enemies ) {
    if (enemy.isReallyHated === true) {
        console.log(`${enemy.firstName} ${enemy.lastName} (Never forget!)`);
    } else {
        console.log(`${enemy.firstName} ${enemy.lastName}`)
    }
}