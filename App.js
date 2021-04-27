import React, {useState} from 'react';
import Form from './Form';
import Todo from './Todo';

const App = props => {
    const [todos, setTodos] = useState([]);
    const addTodo = function(todoData) {
        return todoData;
    }
    return (
        <>
        <h1>Dennis M. Sponer's To Do List</h1>
        <h2> Help<b>{" Instructions: "}</b><br />
        <em>{"1. Type your task name in the 'Add to do...' box and hit Enter on your keyboard."}<br />
        {"2. Click on your completed tasks to remove them from the list."}</em></h2>
            <Form addTodo={addTodo} />
            {todos.map(todoData => (
                <Todo />
            
            ))}
        </>
    );
}

export default App;
