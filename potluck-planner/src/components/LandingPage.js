import React, {  useState } from 'react';
import Login from './Login';
import Register from './Register'

const LandingPage = () => {
    const [showSignup, setShowSignup] = useState(false)

    const toggleShowSignUp = () => {
        setShowSignup(!showSignup)
    }

    return (
        <>
        <h2>If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. 
        In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.</h2>
        <h3>Login:</h3>
        <Login />
        <h3>Don't have an account yet?</h3>
        <button onClick={toggleShowSignUp}>Start creating events now!</button>
        {showSignup ? <Register /> : null}
        </>
    )
}

export default LandingPage;