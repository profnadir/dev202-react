import React from 'react'

export default function ResultatList(props) {
  return (
    <div style={{border:"1px solid black",padding:"20px"}}>
        <h2>Resultat list Composant</h2>
        <ul>
            {
                props.resultats.map((r,i) => <li key={i}>{r.nom}</li>)
            }
        </ul>
    </div>
  )
}
