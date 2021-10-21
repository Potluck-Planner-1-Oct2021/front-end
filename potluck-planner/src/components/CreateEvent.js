import axios from "axios";
import React, {useEffect, useState} from "react";
import * as yup from 'yup'
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

  const [disabled, setDisabled] = useState(true)
  const [formToSubmit, setFormToSubmit] = useState(initialFormState)

  const submitEvent = () => {
    axiosWithAuth()
  }

  return (
    <div className="App">
        <EventBasics editable={false} setFormToSubmit={setFormToSubmit} formToSubmit={formToSubmit}></EventBasics>
        <CreateFood setFormToSubmit={setFormToSubmit} formToSubmit={formToSubmit}></CreateFood>
        <InviteFriends setFormToSubmit={setFormToSubmit} formToSubmit={formToSubmit}></InviteFriends>
        <button disabled={disabled}>Submit</button>
    </div>
  );
}

export default CreateEvent;
