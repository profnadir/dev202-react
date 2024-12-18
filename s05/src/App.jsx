import './App.css'
import Compteur from './Compteur'
import Message from './Message'
import MessageFun from './MessageFun'
import Presentation from './Presentation'
import Presentation2 from './Presentation2'
import PresentationC from './PresentationC'

function App() {


  const stagiaire1 = {
    nom:"adil",
    prenom:"doe",
    age:"24"
  }

  const langages = ["html","css","js","react"];

  return (
    <>
     {/* <h1>React Function</h1>

     <Presentation nom="john" prenom="doe">
      <button>Like</button>
      <button>Add</button>
     </Presentation>

     <Presentation nom="jane" prenom="doe" />

     <Presentation2 stagiaire={stagiaire1} langages={langages} showLangages="true"/>

     <h1>React Class</h1>
     <PresentationC nom="james" prenom="doe"/> */}


      {/* <Compteur/> */}

      <MessageFun/>

    </>
  )
}

export default App
