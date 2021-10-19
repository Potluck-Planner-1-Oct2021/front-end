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

  return (
    <div>
      <form>
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
