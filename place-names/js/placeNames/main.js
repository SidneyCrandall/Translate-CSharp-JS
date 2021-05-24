// Put your code here

const names = [ "Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China" ];

console.log("All the Places");

// loop through the array and return to us the array under 'all the places'
for ( placeName of names ) {
    console.log(placeName);
};

console.log("THE: Place Names ")

// Filter function that will look through the array of places abd return only ones with 'the'.
const theName = names.filter(p => p.startsWith("The"))

for (place of theName) {
    console.log(place);
}