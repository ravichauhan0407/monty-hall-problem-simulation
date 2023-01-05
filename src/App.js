import './App.css';
import { useState } from 'react'
import { PlayingArea } from './PlayingArea';
import {Layout} from 'antd';

const {Header,Sider,Content} =Layout;





function App() {

  const [state,changeState]=useState(Date.now())
  const [winningGames,changeWinningGames]=useState(0)
  const [switchingWins,ChangeSwitchingWins]=useState(0)
  const [totalGame,changeTotalGame]=useState(0)
  const [collapsed,changeCollapse]=useState(0)
  const resetGame=()=>
  {
        changeState(Date.now())
  }
  const gameEnd=(win,switchwin)=>
  {
        let y=switchingWins+switchwin
        
        let x=winningGames+win;
        changeTotalGame(totalGame+1)
        ChangeSwitchingWins(y)
        changeWinningGames(x)
  }


  return (
      <>
      <Layout>
      <Header   style={{
          position: 'fixed',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}><div className='logo'>MONTY HALL PUZZLE</div></Header>
      </Layout>
      <Layout>
            <Sider  collapsible  breakpoint="xs"
        collapsedWidth="0"
         width={300} style={{
          position: 'fixed',
          marginTop:'50px',
          zIndex: 2,
          width:'700px',
          height:'100%'
        }} >
                <div className='container-1'>
    <div className='container-2'>
  <table class="table table-hover">
  <tbody>
    <tr>
     <th width="5%">TOTAL GAME</th>
     <td width="5%">{totalGame}</td>
    </tr>
    <tr>
     <th width="5%">WIN</th>
     <td width="5%">{winningGames}</td>
     </tr>
     <tr>

     <th width="5%">LOSE</th>
     <td width="5%">{totalGame-winningGames}</td>
     </tr>
     <tr>
     <th width="5%">WIN %</th>
     <td width="5%">{(totalGame>0?parseFloat((winningGames/totalGame)*100).toFixed(2):0)}%</td>
     </tr>
     <tr>
     <th width="5%">Switch Wins</th>
     <td width="5%">{switchingWins}</td>
     </tr>
     <tr>
     <th width="5%">Switch Wins%</th>
     <td width="5%">{(totalGame>0?parseFloat((switchingWins/totalGame)*100).toFixed(2):0)}%</td>
     </tr>
     <tr>
     <th width="5%">Stick Wins</th>
     <td width="5%">{winningGames-switchingWins}</td>
     </tr>
     <tr>
     <th width="5%">Stick Wins%</th>
     <td width="5%">{(totalGame>0?parseFloat(((winningGames-switchingWins)/totalGame)*100).toFixed(2):0)}%</td>
    </tr>
    <tr>
    </tr>
    <tr>
    
    </tr>
  </tbody>
</table>
</div>
<div className='btn-container'><button  onClick={()=>{resetGame()}} className='btn btn-dark custom-btn'>RESET</button></div>
<div >
           
  </div>
</div>
        </Sider>
             
            <Content className='content'>
            <div className='body'>
      <p>The Monty Hall game is a classic probability puzzle that has been popularized by the television game show "Let's Make a Deal." In the game, a contestant is presented with three doors, behind one of which is a prize. The contestant must choose a door, and then the host, who knows where the prize is located, opens one of the remaining doors to reveal a goat. The contestant is then given the option to stick with their original choice or switch to the other remaining door</p>
      <p>The question is: should the contestant stick with their original choice or switch to the other door? Intuitively, it might seem like the chances are 50/50, but the correct answer is actually to switch doors. This may seem counterintuitive, but the math actually supports it.</p>
      <p>An amazing lecture from an MIT professo
professor <a href='https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/lecture-18-probability-introduction/' target='_blank'><underline>here</underline></a></p>
       <PlayingArea key={state} resetGame={resetGame} gameEnd={gameEnd} totalGame={totalGame} winningGames={winningGames} switchingWins={switchingWins}/>
      <p>To prove this, let's consider the three possible scenarios:</p>
      <ol>
      <li><p>The contestant chooses the door with the prize behind it. In this case, the host must reveal a goat behind one of the remaining doors. The contestant's chances of winning the prize by switching doors is 0%</p></li>
      <li><p>The contestant chooses a door with a goat behind it. In this case, the host must reveal the other goat behind one of the remaining doors. The contestant's chances of winning the prize by switching doors is 100%</p></li>
      <li><p>The contestant chooses a door with a goat behind it, and the host reveals the other goat behind one of the remaining doors. In this case, the contestant's chances of winning the prize by switching doors is 100%</p></li>
      </ol>
     <p>So we can see that, overall, the contestant has a 2/3 chance of winning the prize by switching doors, and a 1/3 chance of winning the prize by sticking with their original choice. Therefore, switching doors is the optimal strategy</p>
     <p>Our Monty Hall game simulation allows you to test this out for yourself and see the results for yourself. Simply choose a door and see if you win the prize. You can play as many times as you like and see how often you come out on top</p>
    
    
    
    </div>
            </Content>
      </Layout>
      </>
  );
}

export default App;
