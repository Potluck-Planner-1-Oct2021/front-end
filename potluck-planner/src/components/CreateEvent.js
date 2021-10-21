import React, { useState } from "react";
import CreateFood from "./CreateFood";
import EventBasics from "./EventBasics";
import InviteFriends from "./InviteFriends";
import axiosWithAuth from "./../utils/axiosWithAuth"

const initialFormState = {
  potluck_name: "",
        date: "",
        time: "",
        location: "",
         guests: [],
        foods: []
}

function CreateEvent() {

  const [disabled, setDisabled] = useState(false)
  const [formToSubmit, setFormToSubmit] = useState(initialFormState)

  console.log(formToSubmit)
  const submitEvent = () => {
    axiosWithAuth()
    .post('/potlucks', formToSubmit)
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div className="App">
        <EventBasics editable={false} setDisable= {setDisabled} setFormToSubmit={setFormToSubmit} formToSubmit={formToSubmit}></EventBasics>
        <CreateFood setFormToSubmit={setFormToSubmit} formToSubmit={formToSubmit}></CreateFood>
        <InviteFriends setFormToSubmit={setFormToSubmit} formToSubmit={formToSubmit}></InviteFriends>
        <button onClick={submitEvent} disabled={disabled}>Submit</button>
    </div>
  );
}

export default CreateEvent;
