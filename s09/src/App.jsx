import './App.css'
import './style.css'

import styled from 'styled-components'

const Button3 = styled.button`
  background-color : blue;
  color: white;
`

function App() {

  return (
    <>
      <button style={{backgroundColor:"blue",color:"white"}}>Send</button> 
      <button className='btn2'>Send 2</button>
      <Button3>Send 3</Button3>
    </>
  )
}

export default App
