import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore"
import styled from "styled-components";
import { useState } from "react";

const GamePlay = () => {
    const [currentDice,setCurrentDice] = useState(1);
    const [selectNumber,setselectNumber] = useState();
    const [score,setScore] = useState(0);
    const [error,setError] = useState("");
    
    const generateRandom = (min,max) => {
      return Math.floor(Math.random()*(max-min)+min);
    }

    const rolldice = () => {
      if(!selectNumber) {
        setError("You Have Not Selected Any Number");
        return;
      }
      setError("");
        const rnd = generateRandom(1,7);
        setCurrentDice((prev) => rnd);


        if(selectNumber === rnd) {
          setScore((prev) => prev+rnd);
        } else{
          setScore((prev) => prev-rnd);
        }

        setselectNumber(undefined);
    }
    
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector selectNumber={selectNumber} setselectNumber={setselectNumber} error={error} setError={setError}/>
      </div>
      <RoleDice currentDice={currentDice} rolldice={rolldice}/>
      <div className="btn">
      <Button onClick={() => {setScore(0); setError("")}}>Reset Score</Button>
      </div>
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`

    padding-top:70px;

    .top_section {
      display: flex;
      justify-content: space-around;
      align-items:end;
    }
    
    .btn{
      display: flex;
      flex-direction:column;
      align-items:center;
      justify-content: center;
      gap:10px;
      margin-top:30px;
    }
`;

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    min-width:220px;
    border:none;
    font-size: 16px;


    background: black;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
    cursor : pointer;

    &:hover {
        background-color: white;
        border: 1px solid black;
        color : black;
        transition: 0.2s background ease-in;
    }
`