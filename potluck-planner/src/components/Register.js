import React, { useState } from "react";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  email: "",
};

const Register = () => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
  }

  const handleRegistration = (e) => {
      e.preventDefault()
      axios.post('https://potluckaapi.herokuapp.com/api/auth/register', formValues)
      .then(res => {
          console.log(res)
      })
      .catch(err => 
        console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label htmlFor="username">Username:
          <input 
          id='username'
          name='username'
          type='text'
          value={formValues.username}
          onChange={handleChange}
          />
        </label>
        <label htmlFor="password">Password:
          <input
          id='password'
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
          type='email'/>
          value={formValues.email}
          onChange={handleChange}
        </label>
      </form>
    </div>
  );
};

export default Register;