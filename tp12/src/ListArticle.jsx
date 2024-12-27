import React, { useState } from 'react'

export default function ListArticle() {

    const list = [
        {id: 1, designation: "article 1", prix:150},
        {id: 2, designation: "article 2", prix:250},
        {id: 3, designation: "article 3", prix:350},
    ]

    const [id, setId] = useState(0)
    const [designation, setDesignation] = useState("")
    const [prix, setPrix] = useState(0)
    //const [articles,setArticles] = useState([])
    const [articles,setArticles] = useState(list) // for testing
    const [editMode, setEditMode] = useState(false)


    function handleSubmit(e){
        e.preventDefault();

        if(editMode){
            console.log("editing ...");
            const article = articles.find(a => a.id == id)
            //article.id = id;
            article.designation = designation
            article.prix = prix

            setEditMode(false);
            initiliser()

        }else{
            const newArticle = {id:id, designation:designation, prix: prix}
            setArticles([...articles, newArticle])

            //initiliser()
        }
    }

    function initiliser(){
        setId(0)
        setDesignation("")
        setPrix(0)
    }

    function supprimerArticle(id){
        setArticles([...articles.filter(a=>a.id!=id)])
    }

    function detailsArticle(id){
        const article = articles.find(a => a.id == id)
        if(article){
            alert(`Détails : ID : ${article.id} - Designation : ${article.designation} - Prix : ${article.prix}`)
        }
    }

    function editArticle(id){

        const article = articles.find(a => a.id == id)
        if(article){
            setId(article.id)
            setDesignation(article.designation)
            setPrix(article.prix)
            setEditMode(true)
        }

    }

    return (
        <div>
            <h2>Ajouter Artilce</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID :</label>
                    <input disabled={editMode} type="text" value={id} onChange={e => setId(e.target.value)} />
                </div>
                <div>
                    <label>Designation :</label>
                    <input type="text" value={designation} onChange={e => setDesignation(e.target.value)} />
                </div>
                <div>
                    <label>Prix :</label>
                    <input type="text" value={prix} onChange={e => setPrix(e.target.value)} />
                </div>
                <button type='submit'>{editMode ? "update" : "ajouter" }</button>
            </form>

            <h2>Liste Article</h2>
            <ul>
            {
                articles.map(a => 
                    <li key={a.id}>
                        {
                            `${a.id} | ${a.designation} | ${a.prix}`
                        }

                        <button style={{background:"red",color:"white"}}
                            onClick={()=>supprimerArticle(a.id)}>x</button>

                        <button style={{background:"gray",color:"white"}}
                            onClick={()=>editArticle(a.id)}>!</button>

                        <button style={{background:"orange",color:"white"}}
                            onClick={()=>detailsArticle(a.id)}>?</button>
                    </li>)
            }
            </ul>
            <h2>Statistiques</h2>
            <ul>
                <li>Max : </li>
                <li>Min : </li>
                <li>Moy : </li>
            </ul>
        </div>
    )
}
