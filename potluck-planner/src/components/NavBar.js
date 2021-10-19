import React from 'react';
import { NavLink } from 'react-router-dom';
import logout from './Logout';

const NavBar = () => {

    return(
    <nav>
        <NavLink to ='/dashboard'>Home </NavLink>
        <NavLink to='/create'>Create an Event </NavLink>
        <NavLink to='/logout'>Logout </NavLink>
    </nav>
    )
}

export default (NavBar)
