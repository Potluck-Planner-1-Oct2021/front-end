import React, { useState } from "react";
import CreateFood from "./CreateFood";
import EventBasics from "./EventBasics";
import InviteFriends from "./InviteFriends";
import { connect } from "react-redux";
import { addHostedEvent } from "./../actions/eventActions";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: #105773;
  color: #f2b441;
  height: 100vh;
  
`;

const EventDiv = styled.div`
  width: 50%;
  padding-left: 10rem;
  //border: 1px solid green;
`;

const initialFormState = {
  potluck_name: "",
  date: "",
  time: "",
  location: "",
  guests: [],
  foods: [],
};

function CreateEvent({ addHostedEvent }) {
  const [disabled, setDisabled] = useState(false);
  const [formToSubmit, setFormToSubmit] = useState(initialFormState);

  const { push } = useHistory();

  const submitEvent = () => {
    addHostedEvent(formToSubmit);
    push("/dashboard");
  };

  return (
    <EventContainer>
      <EventDiv>
        <EventBasics
          editable={false}
          setDisable={setDisabled}
          setFormToSubmit={setFormToSubmit}
          formToSubmit={formToSubmit}
        ></EventBasics>
        <CreateFood
          setFormToSubmit={setFormToSubmit}
          formToSubmit={formToSubmit}
        ></CreateFood>
        <InviteFriends
          setFormToSubmit={setFormToSubmit}
          formToSubmit={formToSubmit}
        ></InviteFriends>
        <button onClick={submitEvent} disabled={disabled}>
          Submit
        </button>
      </EventDiv>
    </EventContainer>
  );
}

export default connect(null, { addHostedEvent })(CreateEvent);
