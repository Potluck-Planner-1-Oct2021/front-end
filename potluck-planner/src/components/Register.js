import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart, signUpSuccess, signupFail } from './../actions'
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  email: "",
};

const Register = ({ signUpStart, signUpSuccess, signUpLoading, successMessage, signUpErrorMessage, signupFail }) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
    console.log(formValues)
  }

  const messageInput = 'You have successfully signed up! Please login with your newly created credentials to start planning your event!'

  const handleRegistration = (e) => {
      e.preventDefault()
      signUpStart()
      axios.post('https://potluckaapi.herokuapp.com/api/auth/register', formValues)
      .then(res => {
          signUpSuccess(messageInput)
      })
      .catch(err => {
        signupFail(`There was an error creating your account: ${err.message}. Please try again.`)
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label htmlFor="registration_username">Username:
          <input 
          id='registration_username'
          name='username'
          type='text'
          value={formValues.username}
          onChange={handleChange}
          />
        </label>
        <label htmlFor="registration_password">Password:
          <input
          id='registration_password'
          name='password'
          type='password'
          value={formValues.password}
          onChange={handleChange}
          />
        </label>
        <label htmlFor="email">Email:
          <input
          id='email'
          name='email'
          type='email'
          value={formValues.email}
          onChange={handleChange}
          />
        </label>
        <button>Sign Up!</button>
      </form>
      {signUpLoading && <p>Please Wait...</p>}
      {successMessage && <p>{successMessage}</p>}
      {signUpErrorMessage && <p>{signUpErrorMessage}</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    signUpLoading: state.signUpLoading,
    successMessage: state.successMessage,
    signUpErrorMessage: state.signUpErrorMessage,
  }
}

export default connect(mapStateToProps, { signUpSuccess, signUpStart, signupFail })(Register);
