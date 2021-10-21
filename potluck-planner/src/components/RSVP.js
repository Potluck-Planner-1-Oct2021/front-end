import React, { useState } from "react";
import styled from 'styled-components'

//not required
//just requests a text string
//label directs user to provide a comma-separated list of emails

const StyledLabel = styled.label`
// border: 2px solid blue;
`
const StyledInput = styled.input`
//border: 2px solid green;
`
const LabelInputDiv = styled.div`
display: flex;
width: 40%;
justify-content: space-between;
padding: 1%;
`

function RSVP() {

  const [rsvp,setRsvp] = useState('No')

  const change = (event) => {
    setRsvp(event.target.value)
  }

  return (
    <div className="App">
      <form>
        <LabelInputDiv>
          <StyledLabel>RSVP</StyledLabel>

          <select value={rsvp} onChange={change}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
          </select>
          </LabelInputDiv>
      </form>
    </div>
  );
}

export default RSVP;
