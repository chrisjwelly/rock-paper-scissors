// helper function to make things nice
function capitalize(str) {
  const firstLetter = str.slice(0, 1);
  const capitalized = firstLetter.toUpperCase();
  return str.replace(firstLetter, capitalized);
}

function computerPlay() {
  const random = Math.random();
  if (random < (1 / 3)) {
    return "rock";
  } else if (random < (2 / 3)) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const com = computerSelection; // assignment to not be verbose
  const playerCap = capitalize(player);
  const comCap = capitalize(com);
  const win = "You win! " + playerCap + "(you) beats " + comCap + "(com)";
  const lose = "You lose! " + comCap + "(com) beats " + playerCap + "(you)";
  // gotta hardcode the cases man
  switch (getOutcome(player, com)) {
    case 0:
      return "It's a draw! Both of you chose " + playerCap;
      break;
    case 1:
      return win;
      break;
    case 2:
      return lose;
      break;
    default:
      return "Something went wrong";
  }
}

// returns 0 if draw, 1 if player wins, 2 if player loses
function getOutcome(player, com) {
  switch (true) {
    case player === com: 
      return 0;
      break;
    case player === "paper" && com === "rock":
      return 1;
      break;
    case player === "rock" && com === "scissors":
      return 1;
      break;
    case player === "scissors" && com === "paper":
      return 1;
      break;
    default:
      // in all other cases, we lose :(
      return 2;
  }
}

function game() {
  let drawCount = 0;
  let playerWinCount = 0;
  let comWinCount = 0;
  for (let i = 0; i < 5; i++) {
    const roundNumber = "Round " + (i + 1);
    const player = prompt(roundNumber + ": Choose 'rock', 'paper', or 'scissors'");
    const com = computerPlay();
    console.log(roundNumber + ": " + playRound(player, com));
    switch (getOutcome(player, com)) {
      case 0:
        drawCount++;
        break;
      case 1:
        playerWinCount++;
        break;
      case 2:
        comWinCount++;
        break;
      default:
        console.log("Something went wrong...");
    }
  }
  const announcement = playerWinCount === comWinCount
    ? "It's a draw!"
    : playerWinCount > comWinCount
    ? "Player wins!"
    : "Computer wins!";
  console.log("The score is as follows:");
  console.log("Player: " + playerWinCount);
  console.log("Computer: " + comWinCount);
  console.log("Draws: " + drawCount);
  console.log("So.. " + announcement);
}
/*
   const playerSelection = 'rock';
   const computerSelection = computerPlay();
   console.log(playRound(playerSelection, computerSelection));
 */
