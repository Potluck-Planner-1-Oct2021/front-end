import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

const Header = (props) => {

    const { isLoggedin } = props

    return(
        <header>
        <h1>Potluck Planner</h1>
        {isLoggedin && <NavBar />}
      </header> 
    )
}

const mapStateToProps = state => {
    return {
        isLoggedin: state.isLoggedin
    }
}

export default connect(mapStateToProps)(Header);