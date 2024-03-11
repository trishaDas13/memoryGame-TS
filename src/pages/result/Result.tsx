import React from "react";
import "./style.scss";
import "../startPage/style.scss";
import background from "../../assets/result.png";
import topDesign from "../../assets/topDesign.png";
import { useNavigate } from "react-router-dom";
import monkey from "../../assets/Group 665.png";
import button from "../../assets/Group 5.png";
import { useScore } from "../../store/ContextAPI";

const Result: React.FC = () => {
  const navigate = useNavigate();
  const { score, setScore } = useScore();

  return (
    <div className="startPg">
      <div className="background">
        <img src={background} alt="bg" className="backImg" />
      </div>
      <div className="winnerArea">
        <div className="banner">
          <img src={topDesign} alt="banner" />
          <p>
            Earned <span> {score} </span> Bananas
          </p>
        </div>
        <img src={monkey} alt="monkey" className="monkey" />
        <img
          src={button}
          alt="result button"
          className="result"
          onClick={() => {
            navigate("/game");
            setScore(0);
          }}
        />
      </div>
    </div>
  );
};

export default Result;
