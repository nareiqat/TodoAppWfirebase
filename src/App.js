import React, {useState, useEffect} from "react";
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Todo from './components/Todo';
import {db} from './firebase';
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('');

  // when the app loads , we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
   //this code here.. fires when the app.js loads
  }, [])

  const addTodo = (event) => {
    // console.log("hello");
    event.preventDefault();//prevent refresh removing data  

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');
  }


  return (
    <div className="todo__list">
      <h1>Todo App</h1>
       
        <FormControl>
            <InputLabel>write a todo</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)} placeholder="add item" />
          

          <Button disabled={!input} type="submit" onClick={addTodo}  variant = "contained" color="primary">Add todo</Button> 

          <ul>
            {todos.map(todo => (
             <Todo todo={todo} />
            ))}
          </ul>
       </FormControl>
    </div>
  );
}

export default App;
