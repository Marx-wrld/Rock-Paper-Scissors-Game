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
  
    //       setTimeout(() => {
    //         //Calling compare hands
    //         compareHands(this.textContent, computerChoice);
    //         //Updating the Images
    //         playerHand.src = `./assets/${this.textContent}.png`;
    //         computerHand.src = `./assets/${computerChoice}.png`;
    //       }, 2000);
    //       //Animation
    //       playerHand.style.animation = "shakePlayer 2s ease";
    //       computerHand.style.animation = "shakeComputer 2s ease";
    //     });
    //   });
    // };
  
    // const updateScore = () => {
    //   const playerScore = document.querySelector(".player-score p");
    //   const computerScore = document.querySelector(".computer-score p");
    //   playerScore.textContent = pScore;
    //   computerScore.textContent = cScore;
    // }
  
    // const compareHands = (playerChoice, computerChoice) => {
    //   //Update Text
    //   const winner = document.querySelector(".winner");
    //   //Checking for a tie
    //   if (playerChoice === computerChoice) {
    //     winner.textContent = "It is a tie";
    //     return;
    //   }
    //   //Check for Rock
    //   if (playerChoice === "rock") {
    //     if (computerChoice === "scissors") {
    //       winner.textContent = "Player Wins";
    //       pScore++;
    //       updateScore();
    //       return;
    //     }
    //   }
}
}