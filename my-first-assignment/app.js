/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.
In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/

//Adding text for git disregard
//adding more text for gitbhub
// Written by Kent, Clark

var friends = ("bob", "ryan", "jill");


var Enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function whoWins(isThereKryptonite, enemyName) {

if (!isThereKryptonite) {
    return ("Superman beats "+enemyName+", of course") ;
} else {
    return ("Depends on how quick Superman can get rid of the Kryptonite. "+enemyName+" could possibly win this one.") ;
    }
}

for (i = 0; i < Enemies.length; i++) {
    var isThereKryptonite
    if (i % 2 === 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(whoWins("isThereKryptonite", "Enemies"[ i ]) ) ; 
}

function howAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return mathFloor((Mat.random()*10)+1);
}

consol.log(howAttractedIsLoisLaneToMe) ;
 
var clarkKent = true;
var superman = false;

while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent = true;
        superman = false;
        console.log("Now I'm Superman!");
        }
    }