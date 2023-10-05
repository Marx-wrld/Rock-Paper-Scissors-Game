const game = () => {
    let pScore = 0; //player score
    let cScore = 0; //computer score 
  
    //Starting the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };

    //Playing the Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener ("click", function() {
          
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3); //random number between 0 and 2
          const computerChoice = computerOptions[computerNumber]; //randomly chooses rock, paper, or scissors
  
          setTimeout(() => {

            //Calling compare hands
            compareHands(this.textContent, computerChoice);
            
            //Updating the Images
            playerHand.src = `./assets/${this.textContent}.png`; //this.textContent is the text content of the button that was clicked

            computerHand.src = `./assets/${computerChoice}.png`; //computerChoice is the random choice of the computer
          }, 2000);

    //       //Animation
    //       playerHand.style.animation = "shakePlayer 2s ease";
    //       computerHand.style.animation = "shakeComputer 2s ease";
    //     });
    //   });
    // };
  
    const updateScore = () => { //updates the score

      const playerScore = document.querySelector(".player-score p"); //selects the player score

      const computerScore = document.querySelector(".computer-score p"); //selects the computer score

      playerScore.textContent = pScore; //updates the player score
      computerScore.textContent = cScore;//updates the computer score
    }
  
    const compareHands = (playerChoice, computerChoice) => {
      //Updating Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It's a tie";
        return;
      }

      //Checking for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
        else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }

      //Checking for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
            }
            else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
            }
        }

        //Checking for Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
            }
            else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
            }
        }

}
}