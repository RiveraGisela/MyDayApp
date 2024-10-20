import React, { useState } from 'react';
import './TaskList.css'

const TaskList = ({ tasks, toggleTaskCompletion, updateTask, deleteTask }) => {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = (task) => {
        setEditingId(task.id);
        setEditText(task.title);
    };

    const saveEdit = (id) => {
        updateTask(id, editText);
        setEditingId(null);
    };

    const cancelEdit = () => {
        setEditingId(null);
    };

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    <input 
                        type="checkbox" 
                        checked={task.completed} 
                        onChange={() => toggleTaskCompletion(task.id)}
                    />
                    {editingId === task.id ? (
                        <input 
                            type="text" 
                            value={editText} 
                            onChange={(e) => setEditText(e.target.value)} 
                            onBlur={() => saveEdit(task.id)} 
                            onKeyDown={(e) => e.key === 'Enter' ? saveEdit(task.id) : e.key === 'Escape' ? cancelEdit() : null} 
                            autoFocus 
                        />
                    ) : (
                        <label onDoubleClick={() => handleEdit(task)}>{task.title}</label>
                    )}
                    <button className="destroy" onClick={() => deleteTask(task.id)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
