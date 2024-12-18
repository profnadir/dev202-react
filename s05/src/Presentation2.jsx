export default function Presentation2(props){
    return(
        <div>
            <h2>hi {props.stagiaire.nom} {props.stagiaire.prenom} </h2>
            <h3>Age : {props.stagiaire.age}</h3>
            {
                props.showLangages ?
                <ul>
                    {
                        props.langages.map((l,i) => <li key={i}>{l}</li>)
                    }
                </ul>
                : <p> pas de langages</p>
            }
            <hr />
        </div>
    )
}

