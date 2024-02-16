 //uložene score ziskava ven pokud je vnem nějaká hodnota a pokud undefined tak pomoci defaultniho vyrazu pridava body do objektu score.
 let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
/* same as above but we used default value ||
if(!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
*/ 
updateScoreElement();


//funkce přebírajicí výběr live hráče a následně porovnáva PC move s Live hračem move a uklada výsleden do result.
function playGame (playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

if(playerMove ==='scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.'
    } else if (computerMove === 'paper') {
      result = 'You Win!'
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }

  }  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win!';
    } else if  (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  }  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if  (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You Win!';
    }
  }
  
  //Přidává skore do objektu "score" +1 jak hra dopadla.
  if(result === 'You Win!') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if(result === 'Tie.') {
    score.ties += 1;
  }
  //uklada objekt score pomoci local storage a nasledne převadí value score do stringu 
  localStorage.setItem('score', JSON.stringify(score));
  
  updateScoreElement();
  

  document.querySelector('.js-result')
  .innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You 
<img src="images/${playerMove}-emoji.png" 
class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;

}

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, 
    Losses: ${score.losses}, Ties: ${score.ties}`;
}



//Funkce která vytvoří náhodný tah počítače a uloží ho do funkce.
function pickComputerMove() {
const randomNumber = Math.random();

  let computerMove = '';
  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
    return computerMove;
  
  } 