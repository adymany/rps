let user_score=0;
let computer_score=0;
const c=["rock","paper","scissor"];

const choice=document.querySelectorAll(".choice");

choice.forEach((choice) => {
    
    choice.addEventListener("click", () => {
       const userchoice=choice.getAttribute("id");
       const compchoice= Math.floor(Math.random() *3);
       
        

        if(c[userchoice] == c[compchoice]){
            console.log("its a tie");
            document.getElementById("output").textContent=" NIGGA ITS A TIE";
        }
        else if(c[userchoice] == "rock" && c[compchoice] == "scissor"){
         console.log("user wins");
        user_score++;
        document.getElementById("output").textContent="YOU WON NIGGA";
        }
        else if(c[userchoice] == "paper" && c[compchoice] == "rock"){
            console.log("user wins");
            user_score++;
            document.getElementById("output").textContent="YOU WON NIGGA";
            }
        else if(c[userchoice] == "scissor" && c[compchoice] == "paper"){
            console.log("user wins");
             user_score++;
             document.getElementById("output").textContent="YOU WON NIGGA";
             }
        else{
            console.log("computer wins");
            computer_score++;
            document.getElementById("output").textContent="NIGGA YOU LOST 🤣🤣";
             }

             document.getElementById("user-score").textContent=user_score;
             document.getElementById("comp-score").textContent=computer_score;



             
    });
    
});

