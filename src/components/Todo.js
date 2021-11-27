import React, { useState } from 'react';

import './Todo.css';
import TodoForm from './TodoForm';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';

const Todo = props => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const updateInput = value => {
        props.updateTodo(edit.id, value);

        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={updateInput} />
    }

    const showTodo = props.todos.map((todo, index) => {
        return (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <RiDeleteBin7Line 
                        onClick={() => props.removeTodo(todo.id)}    
                        className="delete-icon"
                    />
                    <FiEdit2
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                        className="edit-icon" 
                    />
                </div>
            </div>
        );
    })

    return (
        <div className="todos">
           {showTodo}
        </div>
    )
};

export default Todo;
