import React from 'react'

export const Todo = ({todos,onDelete}) => {

    let stl = {
        fontWeight: "bold"
    }
    return (
        <div>
            <h4>{todos.title}</h4>
            <p style = {stl}>{todos.desc}</p>
            
            <button className = "btn btn-sm btn-danger"  onClick = {()=> {onDelete(todos)}}>Delete</button>
            <hr />

        </div>
    )
}
