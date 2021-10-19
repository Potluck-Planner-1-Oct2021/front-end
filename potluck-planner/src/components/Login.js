import axios from "axios";
import React, { useState } from "react";



export default function Login() {
  
  const [formValues, setFormValues] = useState({ username: "", password: "" });


  const onChange = (e) => {
      setFormValues({...formValues, [e.target.name]: e.target.value})
  }


  const handleLogin = (e) => {
      e.preventDefault()
      axios.post('https://potluckaapi.herokuapp.com/api/auth/login', formValues)
      .then(res => {
          localStorage.setItem("token", res.data.token)
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