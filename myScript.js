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
            return "You lost!!";

             
            }
            else if(userSelect==="Paper"||userSelect==="paper"){
                j++;
                return "You won!!";
                
            }
            else if(userSelect==="Rock"||userSelect==="rock"){
                k++;
                return "It's a tie";
                
            }
            else{
                return "Invalid";
            }
            break;
        case 'Paper':
            if(userSelect==="Scissor"||userSelect==="scissor"){
                j++;
                return  "You won!!";
                
                }
             else if(userSelect==="Rock"||userSelect==="rock"){
                i++;
                    return "You lost!!";
                    
                }
                else{
                    k++;
                    return "It's a tie";
                }
                break;
            
        case 'Scissors':
            if(userSelect==="Rock"||userSelect==="rock"){
                j++;
                return  "You won!!";
                
                }
                else if(computerSelect==="Paper"||userSelect==="paper"){
                    i++;
                    return "You lost!!";
                   
                }
                else{
                    k++;
                    return "It's a tie";
                    
                }
                break;
        default:
            return "Invalid";
    }

}
var count = 0;

 const text = document.querySelector(".text");
 const p1 = document.querySelector(".p1");
 const p2 = document.querySelector(".p2");
 const p3 = document.querySelector(".p3");
 const h2=document.querySelector("h2");
 const btn1 = document.querySelector(".button1");
 const btn2 = document.querySelector(".button2");
 const btn3 = document.querySelector(".button3");
 const btn4 = document.querySelector(".button4");
 const head = document.querySelector("h1");
const announceWin = document.querySelector(".anWinner");
const node = document.querySelector(".theme-1");
const node2 = document.querySelector(".theme-2");
const image = document.querySelector(".cat");
let replayCreated = false;


function announceWinner(){
    if(i>j){
        return "Computer is the Winner";
    }
    else if(i<j){
        return "User is the winner";
    }
    else{
        return " tie";
    }
}

function refreshPage(){
    location.reload();
}



function removeBtn(){
    btn1.style.display="none";
    btn2.style.display="none";
    btn3.style.display="none";
    btn4.style.display="none";
}

function changeBtn(){
 
   const rockImg=document.createElement("img");
   const rock= document.createElement("button");
   rock.className = "rockBtn";
   
   node.appendChild(rock);
   rock.appendChild(rockImg);
   rockImg.src="https://i.pinimg.com/564x/d5/24/f9/d524f950d67bd1d54dc13e1ecb48a0c2.jpg";
   rockImg.title = "rock";
   rockImg.style.height="130px";
   rockImg.style.width = "125px";
   

 const rockBtn = document.querySelector(".rockBtn");

 

  rockBtn.addEventListener('click',()=>{
    count++;
    if(count<5){
    text.innerHTML = "You've chosen Rock!";
    const computerSelection = GetComputerChoice();
    p1.innerHTML="";
    p2.innerHTML="";
    text.innerHTML += "Computer chooses "+computerSelection;
    p2.innerHTML = PlayRound("rock",computerSelection);
    h2.innerHTML = "computer  = " + i + "User = " + j;
    }
    else{
        announceWin.innerText =announceWinner();
        announceWin.style.marginTop = "5px";
        announceWin.style.textAlign = "center";
        if(!replayCreated){
            const replay = document.querySelector(".replay");
            const catImage = document.createElement("img");
            replay.appendChild(catImage);
            catImage.src = "images/catsly.png";
            
            replay.addEventListener('click',()=>{
                refreshPage();
            })
            replayCreated = true;
    
        }
            
            
          
    }
    node.style.marginTop = "25px";
})

   const paper = document.createElement("button");
   paper.className="paperBtn";
   const paperImg=document.createElement("img");
   paperImg.title="paper";
   node.appendChild(paper);
   paper.appendChild(paperImg);
   paperImg.src="https://i.pinimg.com/564x/16/94/4c/16944c68c7178fb316ec06bf03cb4fe4.jpg";
   paperImg.style.height="130px";
   paperImg.style.width = "125px";
   const paperBtn = document.querySelector(".paperBtn");

   paperBtn.addEventListener('click',()=>{
    count++;
    if(count<5){
    text.innerHTML = "You've chosen Paper!";
    const computerSelection = GetComputerChoice();
  
    p1.innerHTML="";
    p2.innerHTML="";
    node.style.marginTop = "65px";
    text.innerHTML+="Computer chooses "+computerSelection;
   p2.innerHTML+= PlayRound("paper",computerSelection);
   h2.innerHTML = "computer  = " + i + "User = " + j;
    }
    else{

        announceWin.innerHTML=announceWinner();
        announceWin.style.marginTop = "5px";
        announceWin.style.textAlign = "center";
        h2.innerHTML +="";
        if(!replayCreated){
            const replay = document.querySelector(".replay");
            const catImage = document.createElement("img");
            replay.appendChild(catImage);
            catImage.src = "images/catsly.png";
            
            replay.addEventListener('click',()=>{
                refreshPage();
            })
            replayCreated = true;
    
        }
            
            
          
       
    }
    node.style.marginTop = "25px";
})

   const scissor = document.createElement("button");
   scissor.className="scissorBtn";
   const sciImg=document.createElement("img"); 
   node2.appendChild(scissor);
   scissor.appendChild(sciImg);
   sciImg.src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81c3f061-6f8c-4eed-bcc9-7ee6ef7b6706/d41fmf2-32bf0ab2-e372-4d0c-84a9-2c7c12e03ab2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxYzNmMDYxLTZmOGMtNGVlZC1iY2M5LTdlZTZlZjdiNjcwNlwvZDQxZm1mMi0zMmJmMGFiMi1lMzcyLTRkMGMtODRhOS0yYzdjMTJlMDNhYjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.t5cicPOp0VrAq3bxR4e59h7p2DfKhjXoiAXZmHeFdsk";
   sciImg.title = "scissor";
   sciImg.style.height="130px";
   sciImg.style.width = "125px";
   const scissorBtn = document.querySelector(".scissorBtn");

   scissorBtn.addEventListener('click',()=>{
    count++;
    if(count<5){
    text.innerHTML = "You've chosen Scissor!";
    const computerSelection = GetComputerChoice();
    p1.innerHTML="";
    p2.innerHTML="";
    text.innerHTML+="Computer chooses "+computerSelection;
   p2.innerHTML+= PlayRound("scissor",computerSelection);
   h2.innerHTML = "computer  = " + i + "User = " + j;
    }
    else{
    
        announceWin.innerHTML=announceWinner();
       
        announceWin.style.textAlign = "center";
        h2.innerHTML +="";
        if(!replayCreated){
        const replay = document.querySelector(".replay");
        const catImage = document.createElement("img");
        replay.appendChild(catImage);
        catImage.src = "images/catsly.png";
        
        replay.addEventListener('click',()=>{
            refreshPage();
        })
        replayCreated = true;

    }
        
        
      }
      node.style.marginTop = "25px";
}) 



}

btn1.addEventListener('click',(event)=>{
    document.body.style.backgroundImage='url("https://wallpapercave.com/dwp2x/2j4Ah48.jpg")';
    head.innerText="SLYTHERIN";
    head.style.fontSize= "32px";
    head.style.color= "silver";
    node.style.marginTop = "100px";
    removeBtn();
    changeBtn();
 })

btn2.addEventListener('click',(event)=>{
    document.body.style.backgroundImage='url("https://wallpapercave.com/dwp2x/wp11677245.jpg")';
    head.innerText="GRYFFINDOR";
    head.style.fontSize= "32px";
    head.style.color= "gold";
    node.style.marginTop = "100px";
    removeBtn();
    changeBtn();
   
    
})

btn3.addEventListener('click',(event)=>{
    document.body.style.backgroundImage='url("https://cdn.pixabay.com/photo/2019/04/30/20/45/space-4169495_1280.jpg")';
    head.innerText="RAVENCLAW";
    head.style.fontSize= "32px";
    head.style.color= "#946B2D";
    node.style.marginTop = "100px";
    removeBtn();
    changeBtn();
})

btn4.addEventListener('click',(event)=>{
    document.body.style.backgroundImage='url("https://wallpapercave.com/dwp2x/wp9562737.jpg")';
    head.innerText="HUFFLEPUFF";
    head.style.fontSize= "32px";
    head.style.color= "black";
    node.style.marginTop = "100px";
    removeBtn();
    changeBtn();
})


