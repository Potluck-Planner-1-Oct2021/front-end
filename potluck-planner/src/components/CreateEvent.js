import React, { useState } from "react";
import CreateFood from "./CreateFood";
import EventBasics from "./EventBasics";
import InviteFriends from "./InviteFriends";
import axiosWithAuth from "./../utils/axiosWithAuth"
import styled from 'styled-components'
import NavBar from "./NavBar";

const initialFormState = {
  potluck_name: "",
        date: "",
        time: "",
        location: "",
         guests: [],
        foods: []
}

const EventContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #105773;
    color: #F2B441;
    height: 100vh;
`

const EventDiv = styled.div`
    width: 50%;
    //border: 1px solid green;
`

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
    <EventContainer>
      <NavBar></NavBar>
      <EventDiv>
        <EventBasics editable={false} setDisable= {setDisabled} setFormToSubmit={setFormToSubmit} formToSubmit={formToSubmit}></EventBasics>
        <CreateFood setFormToSubmit={setFormToSubmit} formToSubmit={formToSubmit}></CreateFood>
        <InviteFriends setFormToSubmit={setFormToSubmit} formToSubmit={formToSubmit}></InviteFriends>
        <button onClick={submitEvent} disabled={disabled}>Submit</button>
      </EventDiv>
    </EventContainer>
  );
}

export default CreateEvent;
