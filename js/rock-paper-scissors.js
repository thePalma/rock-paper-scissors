let result;

// if score is saved on localStorage load it else assign default values
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

console.log(JSON.parse(localStorage.getItem('score')));

function play(playerMove) {
  const computerMove = randomComputerMove();

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You Lose.';
    } else if (computerMove === 'scissors') {
      result = 'You Win.';
    }
  }
  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You Lose.';
    }
  }
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You Lose.';
    } else if (computerMove === 'paper') {
      result = 'You Win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  console.log(`Player picked ${playerMove}, computer picked ${computerMove}`);

  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  // save score on localStorage
  localStorage.setItem('score', JSON.stringify(score));

  // update score on the page
  updateScoreElement();

  // update result on the page
  document.querySelector('.result').innerHTML = result;

  // update moves on the page
  document.querySelector(
    '.moves'
  ).innerHTML = ` You <img class="move-icon" src="icons/${playerMove}-emoji.png" />
  <img class="move-icon" src="icons/${computerMove}-emoji.png" />
  Computer`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  // update score on the page
  updateScoreElement();

  // clear result on the page
  document.querySelector('.result').innerHTML = '';

  // clear moves on the page
  document.querySelector('.moves').innerHTML = '';
}

function randomComputerMove() {
  computerMove = Math.random();

  if (computerMove >= 0 && computerMove < 1 / 3) {
    return 'rock';
  } else if (computerMove >= 1 / 3 && computerMove < 2 / 3) {
    return 'paper';
  } else if (computerMove >= 2 / 3 && computerMove < 1) {
    return 'scissors';
  }
}

function updateScoreElement() {
  document.querySelector(
    '.score'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
