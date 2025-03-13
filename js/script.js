let humanScore = 0;
let computerScore = 0;

let playRound = (human, computer) => {
   //declaring variables
   let message;
   let computerChoice;

   //Getting human choice from prompt
   let humanChoice = prompt(`Please enter rock, paper or scissors`);
   console.log(humanChoice);

   //function to get random computer choice
   let getComputerChoice = (choice) => {
      let randomInt = Math.floor(Math.random() * 3);

      if (randomInt == 0) {
         choice = `rock`;
      } else if (randomInt == 1) {
         choice = `paper`;
      } else if (randomInt == 2) {
         choice = `scissors`;
      }

      return choice;
   }

   //Assign computer choice to variable
   computerChoice = getComputerChoice();
   console.log(computerChoice);

   //Conditional to decide the winner
   if (humanChoice.toLowerCase() === computerChoice) {
      message = `it's a tie!`;
      human++;
      computer++;
   } else if (humanChoice.toLowerCase() === `rock` && computerChoice === `scissors`) {
      message = `You Win, rock beats scissors!`;
      human++;
   } else if (humanChoice.toLowerCase() === `scissors` && computerChoice === `paper`) {
      message = `You Win, scissors beats paper!`;
      human++;
   } else if (humanChoice.toLowerCase() === `paper` && computerChoice === `rock`) {
      message = `You Win, paper beats rock!`;
      human++;
   } else if (humanChoice.toLowerCase() === `rock` && computerChoice === `paper`) {
      message = `You lose, paper beats rock!`;
      computer++;
   } else if (humanChoice.toLowerCase() === `scissors` && computerChoice === `rock`) {
      message = `You lose, rock beats scissors!`;
      computer++;
   } else if (humanChoice.toLowerCase() === `paper` && computerChoice === `scissors`) {
      message = `You lose, scissors beats paper!`;
      computer++;
   }

   alert(message);

   return [human, computer];
}

let scores = playRound(humanScore, computerScore);
humanScore = humanScore + scores[0];
computerScore = computerScore + scores[1];

console.log(humanScore);
console.log(computerScore);