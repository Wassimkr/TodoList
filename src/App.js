import React, { useState, useEffect } from 'react';
import Todo from './Todo.js';
import './Todo.css';
import db from './firebase';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import firebase from 'firebase';

function App() {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log('========>' , input);

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);     

  const addTodo = (event) =>{
    event.preventDefault(); //will stop refreshing page
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setTodos([...todos, input]);
    setInput('');
  }
  
  return (
    <div class="content">
    <div className="App">

      <h1>Todo App</h1>
      <form>

        <FormControl>
          <InputLabel>Write Todo</InputLabel>
          <Input value={input} onChange={event =>setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" href="#contained-buttons" onClick={addTodo} type="submit">
           add todo
        </Button>
        
      </form>

      
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
         /* {} <li>{todo}</li> */
        )
        )}
        
      </ul>
    </div>
    </div>
  );
}

export default App;
