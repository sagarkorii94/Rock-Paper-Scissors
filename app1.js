let userScore = 0;
let computerScore = 0;
const userScore_span =document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerChoice(){
    const  choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]; 
}
function convertToword(letter){
    if(letter == 'r') return "Rock";
    if(letter == 'p') return "Paper";
    return "Scissors";
}
function win(userChoice,computerChoice){
    userScore++;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToword(userChoice)} beats ${convertToword(computerChoice)} ".you wins!!"`;
    userChoice_div.classList.add('green-glow');
    setTimeout(()=>userChoice_div.classList.remove('green-glow'),300);

}
function loss(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(userChoice);
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToword(userChoice)} loss by ${convertToword(computerChoice)} ".you loss!!"`;
    userChoice_div.classList.add('red-glow');
    setTimeout(()=>userChoice_div.classList.remove('red-glow'),300);

}
function draw(userChoice,computerChoice){

    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToword(userChoice)} equal ${convertToword(computerChoice)} ".Draw Draw!!"`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(()=>{userChoice_div.classList.remove('gray-glow')},300);

}
function game(userChoice){
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',()=>
    game("r"));
    
    paper_div.addEventListener('click',()=>
    game("p"));
    
    scissors_div.addEventListener('click',()=>
    game("s"));
    
}
main();