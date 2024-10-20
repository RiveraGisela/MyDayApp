import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import TaskInput from './TaskInput/TaskInput';
import TaskList from './TaskList/TaskList';
import Footer from './Footer//Footer';

const App = () => {
    const [tasks, setTasks] = useState([]);
    
    
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('mydayapp-reactjs'));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    
    useEffect(() => {
        localStorage.setItem('mydayapp-reactjs', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title) => {
        const newTask = { id: Date.now(), title: title.trim(), completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const updateTask = (id, newTitle) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle.trim() } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    const filterTasks = (filter) => {
        if (filter === 'pending') {
            return tasks.filter(task => !task.completed);
        }
        if (filter === 'completed') {
            return tasks.filter(task => task.completed);
        }
        return tasks;
    };

    const location = useLocation();
    const filter = location.pathname.replace('/', '') || 'all';
    const filteredTasks = filterTasks(filter);

    return (
        <div className="app">
            <h1>My Day</h1>
            <h4>All my task in one place</h4>
            <TaskInput addTask={addTask} />
            {tasks.length > 0 && (
                <>
                    <TaskList 
                        tasks={filteredTasks} 
                        toggleTaskCompletion={toggleTaskCompletion} 
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                    <Footer 
                        filter={filter} 
                        clearCompleted={clearCompleted} 
                    />
                </>
            )}
        </div>
    );
};

export default App;
