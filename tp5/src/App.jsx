import './App.css'
import Header from './Header'
import HeaderC from './HeaderC'
import JeuDe from './JeuDe'
import JeuDeF from './JeuDeF'
import Presentation from './Presentation'
import PresentationC from './PresentationC'
import Voiture from './Voiture'
import VoitureC from './VoitureC'

function App() {

  return (
    <>
      {/* <JeuDe cache={4}/> */}
      <JeuDeF cache={5}/>
      {/* <h2>TP1</h2>
      <Header/>
      <br/>
      <Presentation/>
      <hr />
      <HeaderC/>
      <br/>
      <PresentationC/>
      <hr />
      <h2>TP2</h2>
      <Voiture/>
      <hr />
      <VoitureC/> */}
    </>
  )
}

export default App
