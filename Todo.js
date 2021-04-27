import React, {useState} from 'react';

function Todo({ todo, index, remove }) {
    function handle() {
        console.log('Ping:', index);
        remove(index);
    }
    return <div
        className="todo"
        onClick={handle}>{todo.text}
        <button> X </button>
    </div>
}

export default Todo;
