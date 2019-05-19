let drawCount = 0;
let playWinCount = 0;
let comWinCount = 0;

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
      console.log("It's a draw! Both of you chose " + playerCap);
      drawCount++;
      drawCountRendered.textContent = drawCount;
      break;
    case 1:
      console.log(win);
      playWinCount++;
      playWinCountRendered.textContent = playWinCount;
      break;
    case 2:
      console.log(lose);
      comWinCount++;
      comWinCountRendered.textContent = comWinCount;
      break;
    default:
      return "Something went wrong";
  }
  if (comWinCount === 5 || playWinCount === 5) {
    const winner = comWinCount > playWinCount
                   ? "Computer "
                   : "Player ";
    result.textContent = winner + "wins overall!";
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

// Event Listeners:
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const playWinCountRendered = document.querySelector("#player-win");
const comWinCountRendered = document.querySelector("#com-win");
const drawCountRendered = document.querySelector("#draw");
const result = document.querySelector("#result");

rockBtn.addEventListener("click", e => playRound("rock", computerPlay()));
paperBtn.addEventListener("click", e => playRound("paper", computerPlay()));
scissorsBtn.addEventListener("click", e => playRound("scissors", computerPlay()));

