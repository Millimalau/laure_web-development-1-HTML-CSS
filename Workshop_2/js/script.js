// STEP 1: Print text to the browser console is string ""
console.log("Hello, World!");


// STEP 2: Variables

// Store text values in variables

const userName = "Milli";
const lempiEläin = "Kissa";


// Print the variables to the console
console.log("Minun nimi on " + userName);
console.log("Lempi eläimeni on " + lempiEläin);

// STEP 3: User interaction


// Display a pop-up message

alert("Tervetuloa sivuilleni!");

// Ask the user for their name

const visitorName = prompt("Mikä on nimesi?");

// Print the user's answer

console.log("Terve " + visitorName + "! Tervetuloa javascrptin pariin!");

// Ask the user for their favorite animal (Laitoin kommentiksi, koska alemmassa tehtävässä kysytään samaa asiaa uudestaan, joten se ei ole tarpeen tässä vaiheessa.)

//const visitorFavoriteAnimal = prompt("Mikä on lempi eläimesi?");

// Create a sentence using both answers (Laitoin kommentiksi, koska alemmassa tehtävässä kysytään samaa asiaa uudestaan, joten se ei ole tarpeen tässä vaiheessa.)

//console.log("Terve " + visitorName + "! Sinun lempi eläimesi on " + visitorFavoriteAnimal + ".");



// console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

const visitorFavoriteAnimal = prompt("Mikä on Sun lempi eläin?");

if (visitorFavoriteAnimal === "Kissa") {
    console.log("Hyvä valinta! Se on myös minun lempieläimeni!");
} else {
    console.log("Kiva, sinun lempi eläimesi on " + visitorFavoriteAnimal + ".");
}   

// const visitorFavoriteAnimal = prompt("What is your favorite animal?");


// Ask the user for their age using prompt().

const visitorAge = prompt("How old are you?");

// Create an if / else statement:

//If the user is 18 or older, display: "You are an adult."
//Otherwise display: "You are under 18."
//Print the result to the Console.

if (visitorAge >= 18) {
    console.log("SInä olet aikuinen.");
} else {
    console.log("Sinä olet alle 18.");
}

//Create a function called greetUser.

//The function should receive a name as a parameter and print a greeting.

function greetUser(name) {
    console.log("Moi " + name + "!");
}

greetUser("Milli");

//Add a heading and a button to your HTML page.

//When the button is clicked, use JavaScript to display a message.

//You can experiment with:

//alert("JavaScript works!");


alert("JavaScript toimii!");

