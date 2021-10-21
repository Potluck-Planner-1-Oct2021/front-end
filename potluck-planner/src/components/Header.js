import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #105773;
    color: #f2b441;
`

const Header = (props) => {

    const { isLoggedin } = props
    
    return(
        <StyledHeader>
        <h1>Potluck Planner</h1>
        {isLoggedin && <NavBar />}
        </StyledHeader> 
    )
}

const mapStateToProps = state => {
    return {
        isLoggedin: state.landingState.isLoggedIn
    }
}

export default connect(mapStateToProps)(Header);