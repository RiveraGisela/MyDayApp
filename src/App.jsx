import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import TaskInput from './TaskInput/TaskInput';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';
import './App.css'

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

    
    const pendingTasksCount = tasks.filter(task => !task.completed).length;

    return (
        <div className="app">
            <div className='container'>
              <p className='Title'>My Day</p>
              <p className='subTitle'>All my tasks in one place</p>
              <TaskInput addTask={addTask} />
            </div>
            {tasks.length > 0 && (
                <>
                <div className=' containerMainFooter'>
                    <TaskList 
                        tasks={filteredTasks} 
                        toggleTaskCompletion={toggleTaskCompletion} 
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                    <Footer 
                        tasksCount={pendingTasksCount}  
                        filter={filter} 
                        clearCompleted={clearCompleted} 
                    />
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
