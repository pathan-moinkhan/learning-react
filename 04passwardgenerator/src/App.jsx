import { useState , useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null)

  const passwordgenerator = useCallback( () => {
    let pass = ""
    let  str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
     if (charAllowed) str += "!@#$%^&*{}[]_-=+~`"

     for (let i = 1;  i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
     }

     setpassword(pass)

  } , [length, numberAllowed, charAllowed, setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.selectselectionrange(0,999)
    window.navigator.clipboard.writeText(password)} , [password])

  useEffect(() => {passwordgenerator()} , [length, numberAllowed, charAllowed, passwordgenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
           type="range" 
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setlength(e.target.value)}}/>

           <label>length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {setnumberAllowed((prev) => !prev);

          }}
           />
           <label htmlFor="numberInput">number</label>
        </div>

         <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() => {setcharAllowed((prev) => !prev);

          }}
           />
           <label htmlFor="characterInput">character</label>
        </div>
        
        
      </div>
     </div>
    </>
  )
}

export default App
