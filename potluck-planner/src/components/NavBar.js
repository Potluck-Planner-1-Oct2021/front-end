import React from 'react';
import { NavLink } from 'react-router-dom';
import logout from './../utils/logout'

const NavBar = () => {
    return(
    <nav>
        <NavLink to ='/dashboard'>Home </NavLink>
        <NavLink to='/create'>Create an Event </NavLink>
        <NavLink onClick={logout} to='/'>Logout </NavLink>
    </nav>
    )
}

export default NavBar;