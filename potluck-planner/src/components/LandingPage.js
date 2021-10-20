import React, {  useState } from 'react';
import { connect } from 'react-redux'
import Login from './Login';
import Register from './Register'


const LandingPage = (props) => {
    const [showSignup, setShowSignup] = useState(false)
    const { landingLoading } = props

    const toggleShowSignUp = () => {
        setShowSignup(!showSignup)
    }

    return (
        <>
        <h2>If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. 
        In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.</h2>
        <h3>Login:</h3>
        <Login />
        {landingLoading && <p>Loading...</p>}
        <h3>Don't have an account yet?</h3>
        <button onClick={toggleShowSignUp}>Start creating events now!</button>
        {showSignup ? <Register /> : null}
        </>
    )
}

const mapStateToProps = state => {
    return{
        landingLoading: state.landingLoading
    }
}

export default connect(mapStateToProps)(LandingPage);