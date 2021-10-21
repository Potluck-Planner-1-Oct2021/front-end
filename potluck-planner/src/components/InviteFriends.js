import React, { useState } from "react";
import styled from "styled-components";

const LabelInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  //border: 1px solid red;
  width: 40%;
  padding-left: 1%;
`;

const LabelDiv = styled.div`
  //border: 1px solid green;
  width: 50%;
  text-align: left;
`;

// const InputDiv = styled.div`
//   //border: 1px solid purple;//
// `;

// const StyledLabel = styled.label`
//   //border: 2px solid blue;
//   display: block;
// `;
//not required
//just requests a text string
//label directs user to provide a comma-separated list of emails

function InviteFriends({ formToSubmit, setFormToSubmit }) {
  const [friendsList, setFriendsList] = useState("");

  const change = (event) => {
    setFriendsList(event.target.value);
    const arrayList = friendsList.split(",");
    setFormToSubmit({ ...formToSubmit, guests: arrayList });
  };

  return (
    <div className="App">
      <form>
        <LabelInputDiv>
          <LabelDiv>
            <label> Invite Friends</label>
            <label> (comma-separated list of emails)</label>
          </LabelDiv>
          <input
            onChange={change}
            value={friendsList}
            name="friendsList"
            type="text"
          />
        </LabelInputDiv>
      </form>
    </div>
  );
}

export default InviteFriends;
