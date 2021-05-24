// Put your code here

// An array of spells
const spells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyReqired: 5.1 
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyReqired: 2.9   
    },
    {
        name: "Give a deaf person the ability to hear",
        isEvil: false,
        energyReqired: 12.2 
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyReqired: 100.0 
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyReqired: 2921.5 
    }
]

console.log("Do you believe in magic?");
console.log("------------------------");

// functions to call the spells and separate them into good and bad
console.log("Helping Spells:")
for (spell of spells) {
    if (spell.isEvil === false) {
        console.log(`${spell.name}`)
    }
};

console.log("Evil Spells:")
for (spell of spells) {
    if(spell.isEvil === true) {
        console.log(`${spell.name}`)
    }
};
