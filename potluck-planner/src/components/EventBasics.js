import React, {useEffect, useState} from "react";
import * as yup from 'yup'

// This component shows name, date/time, and location
// All are text values
// All are required
// Uses editable state to allow inputs to be changed or not. Editable is passed down through props.
// Should later add CSS to gray out inputs when not editable

  const schema =yup.object().shape({
    name: yup.string().required('Please provide a name for your event'),
    date: yup.string().required('Please let your guets know when your potluck will be'),
    location: yup.string().required('Please let your guests know where your potluck will be'),
  })

function EventBasics(props) {

  const initialFormValues = {name: 'name', date: '', location: ''}

  const [form,setForm] = useState(initialFormValues)
  const [editable,setEditable] = useState(props.editable)
  const [errors, setErrors] = useState({name: '', date: '', location: ''})

  const change = (event) => {
    if(editable){
        const { name, type, value} = event.target
        setForm({...form, [name]: value})
        setFormErrors(name,value)
    }
  }

  const setFormErrors = (name,value) => {
    yup.reach(schema,name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch( err => setErrors({...errors, [name]: err.errors[0]}))
  }

  return (
    <div className="App">
      <form>
        <div>{errors.name}</div>
        <div>{errors.date}</div>
        <div>{errors.location}</div>
        <label> Event Name
            <input onChange={change} value={form.name} name="name" type="text"/>
        </label>

        <label> Date and Time
          <input onChange={change} value={form.date} name="date" type="text"/>
        </label> 

        <label> Location
          <input onChange={change} value={form.location} name="location" type="text"/>
        </label>
      </form>
    </div>
  );
}

export default EventBasics;