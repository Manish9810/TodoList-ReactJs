import React from 'react'
import {Todo} from "./Todo"
import './Stylee.css';

export const Todos = (props) => {

    let myStyle ={
        minHeight:"50vh",
        margin : "50px auto"

    }
    return (
        <div className= "container" style = {myStyle}>
            {/* <h2 className = "text-center my-4">TODO</h2> */}
            {/* <h3>HAA BHAIIII</h3> */}
            {props.todos.length==0?"List is Empty":
            props.todos.map((todos)=>{
                return <Todo todos = {todos} onDelete = {props.onDelete} />
            })
            }
            {/* {props.todos.map((todos)=>{
                return (
                <>
                <h3>THIS IS LIST</h3>
                <Todo todos = {todos}/>
                </> )
            })} */}

          

        </div>
    )
}
