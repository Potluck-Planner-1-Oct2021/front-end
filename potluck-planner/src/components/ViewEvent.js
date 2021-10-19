import React, {useEffect, useState} from "react";
import EventBasics from "./EventBasics";
import InviteFriends from "./InviteFriends";
import RSVP from "./RSVP";
import ViewFoods from "./ViewFoods";



function ViewEvent() {

    const [isOrganizer, setIsOrganizer]=useState(false)

  return (
    <div className="App">
      <EventBasics editable={isOrganizer}></EventBasics>
      {
          isOrganizer && <InviteFriends></InviteFriends>
      }
      {
          !isOrganizer && <RSVP></RSVP>
      }
      <ViewFoods changeAll={isOrganizer}></ViewFoods>
    </div>
  );
}

export default ViewEvent;
