import { useState } from 'react'

import './App.css'


function App() {
  const [login, setLogin] = useState("")
  const [pass, setPass] = useState("")
  const [dateNaissance, setDateNaissance] = useState("")
  const [ville, setVille] = useState("")
  const [genre, setGenre] = useState("")
  const [loisirs, setLoisirs] = useState([])

  const [hideForm, setHideForm] = useState(false)


  const handleSubmit = e => {
    e.preventDefault()

    setHideForm(true)
  }

  const checkedL= e => {
    if(loisirs.includes(e.target.value)){
      setLoisirs([...loisirs.filter(l => l!=e.target.value)])
    }else{
      setLoisirs([...loisirs,e.target.value])
    }
    
  }

  return (
    <>
      {
        !hideForm ?
          <div>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Identifiant</label>
                <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
              </div>
              <div>
                <label>Mot de passe</label>
                <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
              </div>
              <div>
                <label>Date de naissance</label>
                <input type="date" value={dateNaissance} onChange={e => setDateNaissance(e.target.value)} />
              </div>
              <div>
                <label>Ville</label>
                <select onChange={e=>setVille(e.target.value)}>
                  <option value="casa">Casablanca</option>
                  <option >Rabat</option>
                </select>
              </div>
              <div>
                <label>Genre : </label>
                <input type="radio" name='genre' value="homme" onChange={e=>setGenre(e.target.value)}/> <label htmlFor="">Homme</label>
                <input type="radio" name='genre' value="femme" onChange={e=>setGenre(e.target.value)}/> <label htmlFor="">Femme</label>
              </div>
              <div>
                <label>Loisirs : </label>
                <input type="checkbox"  value="Sport" onChange={e=>checkedL(e)}/> <label htmlFor="">Sport</label>
                <input type="checkbox"  value="Lecture" onChange={e=>checkedL(e)}/> <label htmlFor="">Lecture</label>
                <input type="checkbox"  value="Music" onChange={e=>checkedL(e)}/> <label htmlFor="">Music</label>
              </div>
              
              <button type='submit'>S'inscrire</button>
            </form>
          </div>
          :
          <div>
            <button onClick={() => setHideForm(false)}>Se deconnter</button>
            <p>
              Je suis {genre == "homme" ? "Mr." : "Mme."} {login} - {pass} né le {dateNaissance} à {ville} et mes loisirs sont :
              {loisirs.join(" - ")}
            </p>
          </div>
      }
    </>
  )
}

export default App
