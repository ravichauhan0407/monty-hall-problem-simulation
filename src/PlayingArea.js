import React, { useEffect, useReducer, useState } from 'react'
import { Door } from './Door';
import goatImg from './goat_tr.png'
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
import carImg from './car_tr.png'
const getRandomNumber=(n)=>
{
   return ((Math.floor(Math.random() * 10))%n)
}



export const PlayingArea = ({resetGame,gameEnd,totalGame,winningGames,switchingWins}) => {

    let a=[0,1,2]
   
    const [doorState,changeState]=useState([0,0,0,0])
    const [winingState,changeWinningState]=useState(0)

    useEffect(()=>
    {
         changeWinningState(getRandomNumber(3))
    },[])
    
    let isSwitch=[]

    const openDoorHandler=(id)=>
    {
          
          if(!doorState[id])
          {
               isSwitch.push(id)               
                 if(!doorState[3])
                 {
                      let x=doorState
                      if(winingState==id)
                      {
                             let openDoorNumber=getRandomNumber(2)+1
                                        x= x.map((element,index)=>
                                            {
                                                if(index!=id)
                                                {
                                                    openDoorNumber--;
                                                    if(openDoorNumber==0)
                                                    {
                                                        return 1;
                                                    }
                                                    else
                                                    {
                                                        return 0;
                                                    }
                                                }
                                                else
                                                {
                                                    return 0;
                                                }
                                            })
                        }
                        else
                        {
                            let openDoorNumber=getRandomNumber(2)+1
                            x= x.map((element,index)=>
                                {
                                    if(index!=id&&index!=winingState)
                                    {
                                        return 1;
                                    }
                                    else
                                    {
                                        return 0;
                                    }
                                })
                        }
                        x[3]=1
                         changeState([...x])
                 }
                 else if(doorState[3]==1)
                 {
                      //   check win or not 
                       let x=doorState
                       x[id]=1
                       x[3]=2
                       changeState([...x])
                       if(id==winingState)
                       {
                           let res=(isSwitch[0]==isSwitch[1]?0:1)
                           gameEnd(1,res)
                       }
                       else
                       {
                           gameEnd(0,0)
                       }
                       
                 }
          }

    }

  return (
    <> 
       <h1>Simulation</h1>
       <hr/>
       <div className='playing-area'>
        <div className='container'>
        {
          a.map((element)=>{

           return (<div className='box'><div className="backDoor">
             <img src={element==winingState?carImg:goatImg} className='img'>
              </img>
             <Door id={element} onclick={openDoorHandler} isOpen={doorState[element]} ></Door>
        </div>
        </div>
           )
          })
       }
       </div>
   
       </div>
       
    </>
  )
}
