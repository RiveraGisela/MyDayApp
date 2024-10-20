import React, { useState } from 'react';
import './TaskInput.css'

const TaskInput = ({ addTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTask(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Type new todo" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                autoFocus 
            />
        </form>
    );
};

export default TaskInput;
