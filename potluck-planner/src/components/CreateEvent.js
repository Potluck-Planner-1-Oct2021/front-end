import React, { useState } from "react";
import CreateFood from "./CreateFood";
import EventBasics from "./EventBasics";
import InviteFriends from "./InviteFriends";
import { connect } from 'react-redux';
import { addHostedEvent } from './../actions/eventActions'


const initialFormState = {
  potluck_name: "",
        date: "",
        time: "",
        location: "",
         guests: [],
        foods: []
}

function CreateEvent({ addHostedEvent }) {

  const [disabled, setDisabled] = useState(false)
  const [formToSubmit, setFormToSubmit] = useState(initialFormState)

 
  const submitEvent = () => {
    addHostedEvent(formToSubmit)
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

export default connect (null, { addHostedEvent })(CreateEvent);
