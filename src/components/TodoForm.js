import React, { useState, useEffect, useRef } from 'react';

import './TodoForm.css';

const TodoForm = props => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
       inputRef.current.focus()
    })

    const changeHandler = event => {
        setInput(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('');
    }

    return (
        <form className="todo-form" onSubmit={submitHandler}>
            {props.edit ? (
            <>
                <input 
                    type="text" 
                    placeholder="Update your item" 
                    value={input} 
                    name="text" 
                    className='todo-input edit'
                    onChange={changeHandler}
                    ref={inputRef}
                    autoComplete="off"
                />
                <button className='todo-button edit'>Update</button>
            </>
            ) : (
            <>
                <input 
                    type="text" 
                    placeholder="Add a todo" 
                    value={input} 
                    name="text" 
                    className='todo-input'
                    onChange={changeHandler}
                    ref={inputRef}
                    autoComplete="off"
                />
                <button className='todo-button'>Add</button>
            </>
            )}
        </form>
    )
};

export default TodoForm;
