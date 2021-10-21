import React, { useState } from "react";

// need to add restrictions on what is editable

function ViewFood(props) {

    const [form, setForm] = useState({food: props.food, owner: props.owner})

    const change = (event) => {
        const { name, value} = event.target
        setForm({...form, [name]: value})
      }

  return (
    <div className="App">
        <input type="text" name="food" onChange={change} value={form.food}></input>
        <input type="text" name="owner" onChange={change} value={form.owner}></input>
    </div>
  );
}

export default ViewFood;
