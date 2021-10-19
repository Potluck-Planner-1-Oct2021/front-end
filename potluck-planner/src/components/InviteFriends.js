import React, {useEffect, useState} from "react";

//not required
//just requests a text string
//label directs user to provide a comma-separated list of emails

function InviteFriends() {

  const [friendsList,setFriendsList] = useState('')

  const change = (event) => {
    setFriendsList(event.target.value)
  }

  return (
    <div className="App">
      <form>
        <label> Invite Friends (comma-separated list of emails)
          <input onChange={change} value={friendsList} name="friendsList" type="text"/>
        </label>
      </form>
    </div>
  );
}

export default InviteFriends;