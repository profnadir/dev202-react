import { useState } from 'react'
import './App.css'
import ChercherBar from './ChercherBar'
import ResultatList from './ResultatList'

const list = [
  { nom: "banane", type: "fruit" },
  { nom: "orange", type: "fruit" },
  { nom: "pomme", type: "fruit" },
  { nom: "raisins", type: "fruit" },
  { nom: "kiwi", type: "fruit" },
  { nom: "tomate", type: "legume" },
  { nom: "carotte", type: "legume" },
  { nom: "pomme de terre", type: "legume" },
  { nom: "navet", type: "legume" },
  { nom: "poivron", type: "legume" }
]

function App() {

  const [type,setType] = useState("");
  const [resultats,setResultats] = useState([]);

  /* function onChercheSubmitApp(term) { */
  function testerApp(term) {
    console.log(term);
    setType(term);
    setResultats(list.filter(l => l.type == term));
  }

  return (
    <>
      <div style={{ background: "lightgray", padding: "20px" }}>
        <h1>Composant App</h1>
        <ChercherBar tester={testerApp}/>
        {/* <ChercherBar onChercheSubmit={onChercheSubmitApp}/> */}
        <p>le type : {type}</p>
        <ResultatList resultats={resultats}/>
      </div>
    </>
  )
}

export default App
