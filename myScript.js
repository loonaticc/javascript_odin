

function GetComputerChoice(){
  const elements = ["Rock","Paper","Scissors"];
  const element = elements[Math.floor(Math.random()*elements.length)];
  return element;
}
var i=0;
var j=0;
var k=0;

function PlayRound(userSelect,computerSelect){
    switch(computerSelect){
        case 'Rock':
            if(userSelect==="Scissor"||userSelect==="scissor"){
                i++;
            return console.log( "You lost!!");
             
            }
            else if(userSelect==="Paper"||userSelect==="paper"){
                j++;
                return console.log("You won!!");
                
            }
            else if(userSelect==="Rock"||userSelect==="rock"){
                k++;
                return console.log("It's a tie");
                
            }
            else{
                return console.log("Invalid");
            }
            break;
        case 'Paper':
            if(userSelect==="Scissor"||userSelect==="scissor"){
                j++;
                return console.log( "You won!!");
                
                }
             else if(userSelect==="Rock"||userSelect==="rock"){
                i++;
                    return console.log("You lost!!");
                    
                }
                else{
                    k++;
                    return console.log("It's a tie");
                }
                break;
            
        case 'Scissors':
            if(userSelect==="Rock"||userSelect==="rock"){
                j++;
                return console.log( "You won!!");
                
                }
                else if(computerSelect==="Paper"||userSelect==="paper"){
                    i++;
                    return console.log("You lost!!");
                   
                }
                else{
                    k++;
                    return console.log("It's a tie");
                    
                }
                break;
        default:
            return console.log("Invalid");
    }

}

function game(){
const userSelection = prompt("Rock,paper or scissors?");
console.log(`You have choosen ${userSelection}`);
const computerSelection = GetComputerChoice();
console.log(`The computer chooses ${computerSelection}`);
PlayRound(userSelection,computerSelection);

}


while (true) {
    game();
    const userResponse = prompt("Another one? (Yes/No)");
    if (userResponse !== "yes") {
      break;
    }
  }
   
 console.log("You won "+ j +" times");
 console.log("You lost " + i + " times");
   

