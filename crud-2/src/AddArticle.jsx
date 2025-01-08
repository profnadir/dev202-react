import React, { useState } from 'react'

export default function AddArticle(props) {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.addArticle(title, body);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Body</label>
                <input type="text" value={body} onChange={e => setBody(e.target.value)}/>
            </div>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
