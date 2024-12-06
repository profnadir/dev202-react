
import React from 'react'
import './App.css'

function Livres({livres, groupe}){

  let style = "red";

  return (
    <div>
      <h2>Liste des livres : {groupe}</h2>
      <ul className={style}> 
        {
          livres.map((l,i) => <li key={i}>{l.titre}</li> )
        }
      </ul>
    </div>
  )
} 

/* class Livres extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        <h2>Liste des livres</h2>
        <ul className="red"> 
          {
            this.props.livres.map((l,i) => <li key={i}>{l.titre}</li> )
          }
        </ul>
      </div>
    )
  }
} */

function App() {
  
  let livres=[
    {id :10,titre : "POO",auteur :"RAMI",prix :300},
    {id :11,titre : "JS ES6",auteur :"FAMI",prix :230},
    {id :12,titre : "Algorithme",auteur :"KARIMI",prix :330},
    {id :13,titre : "React",auteur :"KARIMI",prix :330},
    {id :14,titre : "HTML & CSS",auteur :"RAMI",prix :340}
  ]



  {/* <h1 style="color:white;background-color:red">hi </h1> */}

 /*  {
    color:"white",
    backgroundColor: "red"
  } */

  const style1 = {color:"white",backgroundColor:"green"}

  return (
    <>
      <h1>HI DEV202</h1>
      <div className="card">

        <Livres livres={livres} groupe="dev202"/>

       {/*  <ul className={style} id='list1'>
          // <li style={style1}>HTML</li>
          //<li>CSS</li>
          //<li>JS</li> 
          {
            //livres.map(l => <li key={l.id}>{l.titre}</li> ) 
            livres.map((l,i) => <li key={i}>{l.titre}</li> )
          }
        </ul> */}
      </div>
      <p className="read-the-docs">
        EFM M201 16/12/2024
      </p>
    </>
  )
}

export default App
