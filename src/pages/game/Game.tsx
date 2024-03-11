import React, { useEffect, useState } from 'react';
import './style.scss';
import background from '../../assets/image 5.png';
import backBtn from '../../assets/Group 156.png';
import progressbanana from '../../assets/Group 155.png';
import yellowBanana from '../../assets/yellowBanana.png';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { useScore } from '../../store/ContextAPI';

interface GameProps {
  // setTimer: React.Dispatch<React.SetStateAction<number>>;
  // timer: number
}

const Game: React.FC = () => {
  const navigate = useNavigate();
  const {score, setScore} = useScore();
  // const [timer, setTimer] = useState(10);
 
  useEffect(() => {
    if(score === 6){
      setTimeout(()=>{
       navigate('/result')
      },1000)
     }
  }, [score])

  // useEffect(()=>{
  //   let timerID = setInterval(() => {
  //     setTimer(timer-1);
  //   }, 1000)

  //   if(timer === 0){
  //     navigate('/result');
  //   }

  //   return (() => clearInterval(timerID))

  // },[timer])




  return (
    <div className="startPg">
      <div className="background">
        <img src={background} alt="bg" className="backImg" />
      </div>
      
      <div className="progress">
        <div className="progressBar" style={{ width: `${(score / 6) * 100}%` }}></div>

        <img
          src={score === 6 ? yellowBanana : progressbanana}
          alt="progress banana"
          className="progressbanana"
        />
      </div>
      
      <div className="cardsHolder">
        <Card setScore={setScore} score={score} />
      </div>

      <button onClick={() => navigate('/instruction')} className="backBtn">
        <img src={backBtn} alt="startButton" />
      </button>
    </div>
  );
};

export default Game;
