import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = ({ tasksCount, filter, clearCompleted }) => {
    return (
        <footer>
            <span className="task-count">
                {tasksCount} {tasksCount === 1 ? 'Item' : 'Items'} left
            </span>
            
            <div className="filters">
                <NavLink exact to="/all" activeClassName="selected">
                    All
                </NavLink>
                <NavLink to="/pending" activeClassName="selected">
                    Pending
                </NavLink>
                <NavLink to="/completed" activeClassName="selected">
                    Completed
                </NavLink>
            </div>

            <button onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

export default Footer;