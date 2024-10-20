import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = ({ filter, clearCompleted }) => {
    return (
        <footer>
            <div className="filters">
                <NavLink exact to="/all" activeClassName="selected">
                    Todas
                </NavLink>
                <NavLink to="/pending" activeClassName="selected">
                    Pendientes
                </NavLink>
                <NavLink to="/completed" activeClassName="selected">
                    Completadas
                </NavLink>
            </div>
            <button onClick={clearCompleted}>Eliminar Completadas</button>
        </footer>
    );
};

export default Footer;