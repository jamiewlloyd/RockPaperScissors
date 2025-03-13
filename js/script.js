let humanChoice = prompt(`Please enter rock, paper or scissors`);
console.log(humanChoice);

let getComputerChoice = () => {
   let computerChoice;
   let randomInt = Math.floor(Math.random() * 3);

   if (randomInt == 0) {
      computerChoice = `Rock`;
   } else if (randomInt == 1) {
      computerChoice = `Paper`;
   } else if (randomInt == 2) {
      computerChoice = `Scissors`;
   }

   return computerChoice;
}
console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;