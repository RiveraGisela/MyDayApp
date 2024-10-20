import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = ({ filter, clearCompleted }) => {
    return (
        <footer>
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