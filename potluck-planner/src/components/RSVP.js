import React, { useState } from "react";

//not required
//just requests a text string
//label directs user to provide a comma-separated list of emails

function RSVP() {

  const [rsvp,setRsvp] = useState('No')

  const change = (event) => {
    setRsvp(event.target.value)
  }

  return (
    <div className="App">
      <form>
        <label> RSVP
          <select value={rsvp} onChange={change}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default RSVP;
