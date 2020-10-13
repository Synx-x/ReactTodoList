import React, { useState } from 'react';

import './App.css';
//import components folder
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //uses state to get input text and set input text
  const [inputText, setInputText] = useState("");
  // state to store Todos
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      />
      <TodoList />
    </div>
  );
}

export default App;
