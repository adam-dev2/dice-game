import styled from "styled-components"

const RoleDice = ({currentDice,setCurrentDice,rolldice}) => {

    

  return (
    <DiceContainer>
       <div className="dice">
            <img src={`/src/images/dice_${currentDice}.png`} alt="dice_1" onClick={rolldice}/>
       </div>
       <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
    .dice {
        cursor:pointer;
    }
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    align-items:center;
    p{
        font-size: 24px;
    }
`;