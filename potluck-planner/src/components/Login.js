import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginSuccess } from './../actions'



const Login = (props) => {
  
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const { push } = useHistory()


  const onChange = (e) => {
      setFormValues({...formValues, [e.target.name]: e.target.value})
  }


  const handleLogin = (e) => {
      e.preventDefault()
      axios.post('https://potluckaapi.herokuapp.com/api/auth/login', formValues)
      .then(res => {
          localStorage.setItem("token", res.data.token)
          props.loginSuccess()
          push('/dashboard')
      })
      .catch(err => {
          console.log(err.message)
      })
  }
  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">
        <input id='username' name="username" type="text" placeholder="username" value={formValues.username} onChange={onChange}/>
        <label htmlFor="password">
          <input id='password' name="password" type="password" placeholder="password" value={formValues.password}  onChange={onChange}/>
        </label>
        <button>Login</button>
      </label>
    </form>
  );
}

export default connect(null, { loginSuccess })(Login)