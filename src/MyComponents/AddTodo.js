
import React, { useState } from 'react';

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");



    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Titel Or Description box is empty");
        }
        else{
        props.addTodo(title,desc);
        }
    }
    return (
        <div className = "container">
            <h3 className = "text-center my-4">TODO</h3>
           <form onSubmit = {submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">ToDo Title</label>
                    <input type="text" value = {title} class="form-control" onChange = {(e)=>{setTitle(e.target.value)}} id="title" />
                    <div id="emailHelp" className="form-text">This is your Todo Title</div>
                </div>
                <hr/>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value = {desc}   onChange = {(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
                    {/* <div class="mb-3 htmlForm-check">
                        <input type="checkbox" class="htmlForm-check-input" id="exampleCheck1" />
                        <label class="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn  btn-sm btn-success">Submit</button>
      </form>

      </div>
    )
}
