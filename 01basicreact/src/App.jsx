import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [ counter, setcounter] = useState(15)
  //let counter = 5
  const addvalue =() => {
    //counter =counter + 1
    if(counter < 20){
    setcounter(counter + 1)}
    else
    alert("cannot exceed more than 20")
  }
  const removevalue =() =>{
    if(counter > 0){
    setcounter(counter - 1)}
    else
    alert("cannot exceed more than 0")
  }
     // about hooks in react
  return (
    <>
      <h1>moin khan</h1>
      <h2>counter value: {counter}</h2>
      
      <button
      onClick={addvalue}
      >add value {counter}</button>
      <br />
      <button
      onClick={removevalue}
      >remove value {counter}</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
