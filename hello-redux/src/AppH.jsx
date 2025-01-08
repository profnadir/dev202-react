import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useState } from 'react'
import * as types from './store/actionsTypes'
import * as actions from './store/actionsCreators'

function AppH(props) {

  const [step,setStep] = useState(5)

  const num = useSelector(state => state.num)
  const dispatch = useDispatch()

  return (
    <>
      <p>Compteur : {num} </p>
     <button onClick={() => dispatch(actions.inc())}>Incrementer</button>

     <button onClick={() => dispatch(actions.dec())}>Decrementer</button>

     <button onClick={() => dispatch(actions.reset())}>Reset</button>
     <div>
      <button onClick={() => dispatch(actions.incBy(step*1))}>Incrementer By</button>

      <button onClick={() => dispatch(actions.decBy(step*1))}>Decrementer By</button>

      <input type="text" value={step} onChange={e=>setStep(e.target.value)}/>

      <hr/>
     {/*  <button onClick={() => dispatch(actions.addArticle({id,title,body}))}>ADD ARTICLE</button> */}
     </div>
    </>
  )
}

export default AppH
