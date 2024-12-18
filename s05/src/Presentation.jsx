export default function Presentation(props){

    // !!! read only : props.nom = "adil"; 
    console.log(props.nom);
    
    return(
        <div>
            <h2>hi {props.nom} {props.prenom}</h2>
            {props.children}
            <hr />
           
        </div>
    )
}

/* export default function Presentation({nom,prenom}){
    return(
        <div>
            <h2>hi {nom} {prenom}</h2>
            <hr />
        </div>
    )
} */

