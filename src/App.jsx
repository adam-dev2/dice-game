import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {
  const [IsGame,setIsGame] = useState(false);

  const toggle = () => {
    setIsGame((ans) => !ans);
  }

  return (
    <>
      {IsGame?<GamePlay/> : <StartGame toggle = {toggle}/>}
    </>
  )
}

export default App
