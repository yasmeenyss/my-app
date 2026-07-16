import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Hello from "./Hello"
import Bye from "./Bye"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>App component</h1>
    <Hello/>
    <img src={reactLogo} width="200px" />
    <Bye />  
         
    </>
  )
}

export default App
