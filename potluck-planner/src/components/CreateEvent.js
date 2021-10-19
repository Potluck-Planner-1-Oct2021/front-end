import React, {useEffect, useState} from "react";
import * as yup from 'yup'
import CreateFood from "./CreateFood";
import EventBasics from "./EventBasics";
import InviteFriends from "./InviteFriends";

function CreateEvent() {

  const [disabled, setDisabled] = useState(true)

  return (
    <div className="App">
        <EventBasics editable={false}></EventBasics>
        <CreateFood></CreateFood>
        <InviteFriends></InviteFriends>
        <button disabled={disabled}>Submit</button>
    </div>
  );
}

export default CreateEvent;