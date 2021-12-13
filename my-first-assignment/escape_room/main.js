var readlineSync = require('readline-sync');
var Name = readlineSync.question("What is your name?");
console.log(Name)

var welcomePage=('Welcome! ' +Name+ ' This is the room escape game called Great Escape');
console.log(welcomePage);

var welcomePage2=('This game may seem easy but it filled with twist and turns. You will have a series of choices in order to escape the room. Have fun and choose wisely');
console.log(welcomePage2);

var isAlive=true;
var hasKey=false;

while(isAlive==true){
const menuOptions=readline.keyIn ('\n Enter 1 to insert your hand in the hole \n Enter 2 to look for the key \n or Enter 3 if you wish to open the door');

//is alive has to be true to continue the game
    if(menuOptions==1){
        console.log('\n ***The hole had a trap! im sorry you die!');
        isAlive=false;
        
    }

    // player chooses option 2 initially and has not had key
    else if(menuOptions==2){
        console.log('\n ***You found the key ! congrats. Proceed to the next step');
        
    }

    //player chooses option 3 and has no key
    else if(menuOptions==3){
        console.log('\n ***you dont have the key!! please try again!');
         
    }

    //player has key and opens door
    else if(menuOptions==3 && hasKey==false){
        console.log('\n ***Congratulations you won the game!!')
        hasKey=false
     
    }

}

