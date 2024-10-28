import styled from 'styled-components'
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div><img src="src/images/dices.png" alt="Dice png" /></div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={() => {
                toggle();
            }}>Play now</Button>
        </div>

    </Container>

  )
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }

`;

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    min-width:220px;
    border:none;
    font-siz  e: 16px;

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