import React, {useEffect, useState} from "react";
import * as yup from 'yup'

  const schema =yup.object().shape({
    name: yup.string().required('Please provide a name for your event'),
    date: yup.string().required('Please let your guets know when your potluck will be'),
    location: yup.string().required('Please let your guests know where your potluck will be'),
    // food: ,
    invites: yup.string()
  })

function CreateEvent() {

  const initialFormValues = {name: '', date: '', location: '', food: [], invites: ''}

  const [form,setForm] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState({name: '', date: '', location: '', food: [], invites: ''})

  const change = (event) => {
    const { name, type, value, checked} = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    setForm({...form, [name]: valueToUse})
    setFormErrors(name,valueToUse)
  }

  const setFormErrors = (name,value) => {
    yup.reach(schema,name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch( err => setErrors({...errors, [name]: err.errors[0]}))
  }

    useEffect(() => {
      schema.isValid(form).then(valid => setDisabled(!valid))
  }, [form])

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

        <label> Suggested Food

        </label>

        <label> Invite Friends (comma-separated list of emails)
          <input onChange={change} value={form.invites} name="invites" type="text"/>
        </label>
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
}

export default CreateEvent;
