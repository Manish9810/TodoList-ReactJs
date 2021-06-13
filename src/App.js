import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import React, { useState, useEffect } from 'react';
import {Footer}  from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { Home  } from "./MyComponents/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let intitem;
  if (localStorage.getItem("todos")===null) {
    intitem = [];
  }
  else {
    intitem = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // **************** TO DELETE***************////
  // for deltion we have to update the functions and setTodos is the function which make function update
  const [todos, setTodos] = useState(intitem);


  //******** */ TO ADD TODOS IN TITLE OR DESC ///*****
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Use effect hum jase ki jb value add kkro or hume fir page p whi value chiyee reload krne k baad bhii******/////

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title="My TODO List" /*searchbar={false}*/ />

      <Switch>
      <Route exact path="/" render = {()=>{
        return (
          <>
         <AddTodo addTodo={addTodo} />
         <Todos todos={todos} onDelete={onDelete} />
         </>
        )}}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      <Footer />
      </Router>

    </>
  );
}

export default App;
