import React, {useEffect, useState} from "react";
import * as yup from 'yup'

function CreateEvent() {

  const initialFormValues = {name: '', date: '', location: '', food: [], invites: ''}

  const [form,setForm] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState({name: '', date: '', location: '', food: [], invites: ''})

  const change = (event) => {
    const { name, type, value, checked} = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    setForm({...form, [name]: valueToUse})
    //setFormErrors(name,valueToUse)
}


  return (
    <div className="App">
      <form>
        <label> Event Name
            <input onChange={change} value={form.name} name="name" type="text"/>
        </label>

        <label> Date and Time
          <input onChange={change} value={form.date} name="date" type="text"/>
        </label> 

        <label> Location
          <input onChange={change} value={form.location} name="location" type="text"/>
        </label>

        <label> Suggested Food

        </label>

        <label> Invite Friends (comma-separated list of emails)
          <input onChange={change} value={form.invites} name="invites" type="text"/>
        </label>
      </form>
    </div>
  );
}

export default CreateEvent;
