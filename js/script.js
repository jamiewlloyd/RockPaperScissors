let human = 0;
let computer = 0;
let rounds = 1;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
   button.addEventListener("click", () => {
      playRound(button.id);
      rounds++;
   });
});

let playRound = (button) => {
   //declaring variables
   let message;
   let computerChoice;
   let liveText = document.querySelector('#live-text');
   let liveHumanScore = document.querySelector('#human-result');
   let liveComputerScore = document.querySelector('#computer-result');

   //Getting human choice from prompt
   let humanChoice = button;

   //function to get random computer choice
   let getComputerChoice = () => {
      let randomInt = Math.floor(Math.random() * 3);
      let choice

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
   if (humanChoice === computerChoice) {
      message = `it's a tie this round!`;
      human++;
      computer++;
   } else if (humanChoice === `rock` && computerChoice === `scissors`) {
      message = `You win this round, rock beats scissors!`;
      human++;
   } else if (humanChoice === `scissors` && computerChoice === `paper`) {
      message = `You win this round, scissors beats paper!`;
      human++;
   } else if (humanChoice === `paper` && computerChoice === `rock`) {
      message = `You win this round, paper beats rock!`;
      human++;
   } else if (humanChoice === `rock` && computerChoice === `paper`) {
      message = `You lose this round, paper beats rock!`;
      computer++;
   } else if (humanChoice === `scissors` && computerChoice === `rock`) {
      message = `You lose this round, rock beats scissors!`;
      computer++;
   } else if (humanChoice === `paper` && computerChoice === `scissors`) {
      message = `You lose this round, scissors beats paper!`;
      computer++;
   }

   liveHumanScore.textContent = human;
   liveComputerScore.textContent = computer;
   liveText.textContent = message;

   if (rounds === 5) {
      if (human === computer) {
         message = `Overall, It's a tie!`;
      } else if (human > computer) {
         message = `You are the WINNER!!`;
      } else if (human < computer) {
         message = `Game over, you lost...`;
      }
      liveText.textContent = message;
      human = 0;
      computer = 0;
      rounds = 1;
   }
}