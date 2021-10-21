import React, { useState } from "react";
import EventBasics from "./EventBasics";
import InviteFriends from "./InviteFriends";
import RSVP from "./RSVP";
import ViewFoods from "./ViewFoods";
import styled from "styled-components";

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #105773;
  color: #f2b441;
  height: 100vh;
`;

const EventDiv = styled.div`
  width: 50%;
  border: 1px solid green;
`;

function ViewEvent() {
  const [isOrganizer, setIsOrganizer] = useState(false);

  return (
    <EventContainer>
      <EventDiv>
        <EventBasics editable={isOrganizer}></EventBasics>
        {isOrganizer && <InviteFriends></InviteFriends>}
        {!isOrganizer && <RSVP></RSVP>}
        <ViewFoods changeAll={isOrganizer}></ViewFoods>
      </EventDiv>
    </EventContainer>
  );
}

export default ViewEvent;
