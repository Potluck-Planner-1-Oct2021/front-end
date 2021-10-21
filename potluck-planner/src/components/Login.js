import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginStart, loginSuccess, loginFail } from './../actions'



const Login = ({loginStart, loginSuccess, loginFail, loginErrorMessage}) => {
  
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const { push } = useHistory()


  const onChange = (e) => {
      setFormValues({...formValues, [e.target.name]: e.target.value})
  }


  const handleLogin = (e) => {
      e.preventDefault()
      loginStart()
      axios.post('https://potluckaapi.herokuapp.com/api/users/login', formValues)
      .then(res => {
          localStorage.setItem("token", res.data.token)
          loginSuccess()
          push('/dashboard')
      })
      .catch(err => {
        loginFail(err.message)
          console.log(err.message)
      })
  }
  return (
    <>
    <form onSubmit={handleLogin}>
      <label htmlFor="username">
        <input id='username' name="username" type="text" placeholder="username" value={formValues.username} onChange={onChange}/>
        <label htmlFor="password">
          <input id='password' name="password" type="password" placeholder="password" value={formValues.password}  onChange={onChange}/>
        </label>
        <button>Login</button>
      </label>
    </form>
    {loginErrorMessage && <p>{loginErrorMessage}. Please try logging in again.</p>}
    </>
  );
}

const mapStateToProps = state => {
  return {
    loginErrorMessage: state.loginErrorMessage
  }
}

export default connect(mapStateToProps, { loginStart, loginSuccess, loginFail })(Login)