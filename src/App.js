import './App.css';
import { useState } from 'react'
import { PlayingArea } from './PlayingArea';
import { Temp } from './Temp';






function App() {

  const [state,changeState]=useState(Date.now())
  const [winningGames,changeWinningGames]=useState(0)
  const [totalGame,changeTotalGame]=useState(0)

  const resetGame=()=>
  {
        changeState(Date.now())
  }
  const gameEnd=(win)=>
  {
        let x=winningGames+win;
        changeTotalGame(totalGame+1)
        changeWinningGames(x)
  }


  return (
      <>
      <div className='body'>
      <div className='heading'>Monty Hall Problem</div>
      <hr/>
      <p>The Monty Hall problem is a famous, seemingly paradoxical problem in conditional probability and reasoning using Bayes' theorem. Information affects your decision that at first glance seems as though it shouldn't.</p>
      <p>In the problem, you are on a game show, being asked to choose between three doors. Behind each door, there is either a car or a goat. You choose a door. The host, Monty Hall, picks one of the other doors, which he knows has a goat behind it, and opens it, showing you the goat. (You know, by the rules of the game, that Monty will always reveal a goat.) Monty then asks whether you would like to switch your choice of door to the other remaining door. Assuming you prefer having a car more than having a goat, do you choose to switch or not to switch?</p>
      <p>The solution is that switching will let you win twice as often as sticking with the original choice, a result that seems counterintuitive to many. The Monty Hall problem famously embarrassed a large number of mathematicians with doctorate degrees when they attempted to "correct" Marilyn vos Savant's solution in a column in Parade Magazine</p>
      <p>If you want to proof you can watch a lecture from MIT 
professor <a href='https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/lecture-18-probability-introduction/' target='_blank'><underline>here</underline></a></p>
       <PlayingArea key={state} resetGame={resetGame} gameEnd={gameEnd} totalGame={totalGame} winningGames={winningGames}/>
      
    </div>
      </>
  );
}

export default App;
