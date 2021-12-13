
//Data Types - Create variable for each data type below using the example provided for a string 

//String - denoted/represented by " " ' ' - they are great for words,language
var firstName = "Donte";
console.log(firstName)

////////


//Number - anything of numerical value - just a number
var shoes = 100;
////////
//Boolean - true or false 
var isAlive = true;
/////////



//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 
var favFoods = ["pizza", "icecream", "fruit", "cereal"]

/////////




//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .
var address = {
    street: "123 Street",
    city: "Salt Lake City"
}

console.log(address.city)
//////////




//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//Below is a variable set equal to an object datatype
//Use dot and bracket notation here as well
var person = {
    name: "Bob",
    age: 26,
    friends: ["Jill", "Rick", "Morty"],
    address:{ 
        street: "321 Street",
        city: "Nowhere"
    }
}

console.log( person["name"] )
console.log( person["address"]["city"])

//////////
 


//Condtional Statement
//if( this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement

//Using below example below to create your own conditional statement.
var color = "blue"

if (color === "red") {
    console.log("I am blue!")
} else if (color === 'blue') {
    console.log("I am red!")
} else {
    console.log(" i am something else!")
}



var sports = "football"

if (sports === "baseball") {
    console.log("I am football!")
} else if (sports === "football") {
    console.log("I am baseball")
}else {
    console.log("hi i'm paul")
}


// /////////



//For Loops - At their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i
//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 
//i = i + 1 same i++


//Create 1 for loop

for(var i = 19; i < 33; i++) {
    console.log(i)
}



//////////////////
//level 0 curriculm last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
var hello = document.getElementById("hello")

console.log(hello)

//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method

hello.addEventListener("click", function() {
    console.log("The button was clicked!")
    document.body.style.backgroundColor = "red"
})

