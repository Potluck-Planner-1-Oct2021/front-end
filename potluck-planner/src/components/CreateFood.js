import React, {useEffect, useState} from "react";
import * as yup from 'yup'
import EventBasics from "./EventBasics";

// not required
// starts off with 3 empty boxes to input food
// user can push button to add additional boxes
// food items are contained in an array


function CreateFood({ formToSubmit, setFormToSubmit }) {

  const [food,setFood] = useState(['','',''])


  console.log(food)
  const changeFood = (event) => {
    const { name, value} = event.target
    let newState = food.slice()
    newState[name].concat(value)
    setFood(newState)
    setFormToSubmit({...formToSubmit, foods: food})
  }

  const addFood = (event) => {
    event.preventDefault()
    const newState = food.slice()
    newState.push('')
    setFood(newState)
  }

  return (
    <div className="App">
        <label> Suggested Food
          {
            food.map((food, index) => <input onChange={changeFood} value={food[index]} name={index} type="text"/>)
          }
        </label>
        <button onClick={addFood}>Add Another Food Item</button>
    </div>
  );
}

export default CreateFood;












// function CreateFood() {

//   const [food, setFood] = useState(['','',''])

//   console.log(food)

//   const changeFood = (event) => {
//     const { name, value} = event.target
//     setFood(food.map((item, idx) => {
//           if(idx === parseInt(name)){
//             return item + value
//           } else{
//             return item
//           }
//         }))
//   }

//   const addFood = (event) => {
//     event.preventDefault()
//     const newState = food.slice()
//     newState.push('')
//     setFood(newState)
//   }

//   return (
//     <div className="App">
//         <label> Suggested Food
//           {
//             food.map((food, index) => <input onChange={changeFood} value={food[index]} name={index} type="text"/>)
//           }
//         </label>
//         <button onClick={addFood}>Add Another Food Item</button>
//     </div>
//   );
// }

// export default CreateFood;

 