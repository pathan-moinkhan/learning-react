import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className='text-white bg-orange-700 text-3xl p-4'>gaurav niggga</h1>
    </UserContextProvider>
  )
}

export default App
