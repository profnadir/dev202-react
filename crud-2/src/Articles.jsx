import React, { useState } from 'react'
import AddArticle from './AddArticle'
import ListArticles from './ListArticles'

const data = [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
]

export default function Articles() {

    const [articles, setArticles] = useState(data)

    const savArticle = (title,body) => {
        //console.log(title,body);

        const id = articles.length + 1;// Math.random(), Date.now()
        setArticles([...articles, { id, title, body}]);

    }

  return (
    <div>
        <AddArticle addArticle={savArticle}/>
        <hr />
        <ListArticles articles={articles}/>
    </div>
  )
}
