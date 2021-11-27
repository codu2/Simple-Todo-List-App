import React, { useState, useEffect, useRef } from 'react';

import classes from './TodoForm.module.css';

const TodoForm = props => {
    const [input, setInput] = useState('');

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
        <form className={classes['todo-form']} onSubmit={submitHandler}>
            <input 
                type="text" 
                placeholder="Add a todo" 
                value={input} 
                name="text" 
                className={classes['todo-input']}
                onChange={changeHandler}
                ref={inputRef}
            />
            <button className={classes['todo-button']}>Add</button>
        </form>
    )
};

export default TodoForm;