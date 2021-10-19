import React, {useEffect, useState} from "react";
import ViewFood from "./ViewFood";

    const sampleItems = [
        {food: 'brownies', owner: 'David'},
        {food: 'steak', owner: 'Priscilla'},
        {food: 'pancakes', owner: ''}
    ]

function ViewFoods(props) {

  const [changeAll,setChangeAll] = useState(props.changeAll)
  const [items,setItems] = useState(sampleItems)

  const addFood = (event) => {
    event.preventDefault()
    const newState = items.slice()
    newState.push({food: '', owner: ''})
    setItems(newState)
  }

  return (
    <div className="App">
      <form>
        {
            items.map(item => (
                <ViewFood food={item.food} owner={item.owner}></ViewFood>
            ))
        }
        <button onClick={addFood}>Add Another Food Item</button>
      </form>
    </div>
  );
}

export default ViewFoods;
