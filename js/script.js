let playRound = () => {
   //declaring variables
   let message;
   let computerChoice;
   let human = 0;
   let computer = 0;

   //Getting human choice from prompt
   let humanChoice = prompt(`Please enter rock, paper or scissors`);

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

   //Conditional to decide the winner
   if (humanChoice.toLowerCase() === computerChoice) {
      message = `it's a tie this round!`;
      human = 1;
      computer = 1;
   } else if (humanChoice.toLowerCase() === `rock` && computerChoice === `scissors`) {
      message = `You win this round, rock beats scissors!`;
      human = 1;
   } else if (humanChoice.toLowerCase() === `scissors` && computerChoice === `paper`) {
      message = `You win this round, scissors beats paper!`;
      human = 1;
   } else if (humanChoice.toLowerCase() === `paper` && computerChoice === `rock`) {
      message = `You win this round, paper beats rock!`;
      human = 1;
   } else if (humanChoice.toLowerCase() === `rock` && computerChoice === `paper`) {
      message = `You lose this round, paper beats rock!`;
      computer = 1;
   } else if (humanChoice.toLowerCase() === `scissors` && computerChoice === `rock`) {
      message = `You lose this round, rock beats scissors!`;
      computer = 1;
   } else if (humanChoice.toLowerCase() === `paper` && computerChoice === `scissors`) {
      message = `You lose this round, scissors beats paper!`;
      computer = 1;
   }

   alert(message);
   return [human, computer];
}

//Full game function
let playGame = () => {
   let humanScore = 0;
   let computerScore = 0;
   let scores;

   for (let i = 0; i <= 4; i++) {
      if (i <= 4) {
         scores = playRound();
         humanScore = humanScore + scores[0];
         computerScore = computerScore + scores[1];
         scores = [];
         console.log(`Your current score: ${humanScore}`)
         console.log(`Computer's current score: ${computerScore}`)
      } else if (i === 5) {
         break;
      }
   }

   console.log(`Final Score. You: ${humanScore} Computer: ${computerScore}`)

   if (humanScore === computerScore) {
      alert(`Overall, It's a tie!`);
   } else if (humanScore > computerScore) {
      alert(`You are the WINNER!!`);
   } else if (humanScore < computerScore) {
      alert(`Game over, you lost...`);
   }
}

//Initialize game
playGame();