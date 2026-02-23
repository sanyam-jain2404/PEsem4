import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(()=>{
    console.log("Welcome");
  },[])

  return (
    <>
      <h1>My App</h1>
    </>
  )
}

export default App
