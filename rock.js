let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const genCompChoice =()=>{
  const options =["rock","paper","scissors"];
  const randIdx =Math.floor(Math.random()*3);
  return options[randIdx];
}
const drawGame =()=>{
  
  msg.innerText="GAME WAS DRAW PLAY AGAIN";
  msg.style.backgroundColor="rgb(40, 171, 175)";
}

const showWinner =(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText =userScore;
  
    msg.innerText=`YOU WIN! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";

  }else{
    compScore++;
    compScorePara.innerText= compScore;
    
    msg.innerText=`YOU LOOSE! your ${compChoice} beats ${userChoice}`;
    msg.innerText="YOU LOOSE ";
    msg.style.backgroundColor="red";

  }
}

const playGame=(userChoice)=>{
  console.log("user Choice=", userChoice);
  //generate computer choice
  const compChoice=genCompChoice();
  console.log("comp choice=",compChoice);

  if(userChoice===compChoice){
    //draw game
    drawGame();
  }else{
    let userWin= true;
    if(userChoice ==="rock"){
      //scissors,paper
      userWin= compChoice==="paper"? false:true;
    }else if(userChoice==="paper"){
      //rock, scissors
       userWin= compChoice==="scissors"? false:true;
    }else{
      //rock,paper
      userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }

};

choices.forEach((choice)=>{
  choice.addEventListener("click",() =>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);

  });
});