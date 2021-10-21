import React, { useState } from "react";
import styled from "styled-components";

// not required
// starts off with 3 empty boxes to input food
// user can push button to add additional boxes
// food items are contained in an array

const FoodContainer = styled.div`
  //border: 1px solid green;
  width: 41%;
  display: flex;
  flex-direction: column;
`;
const LabelInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  //border: 1px solid red;
`;

const LabelDiv = styled.div`
  //border: 1px solid orange;
  margin-left: 2%;
`;

const BoxesDiv = styled.div`
  //border: 1px solid purple;
`;

const StyledInput = styled.input`
  display: block;
  margin: 4% 0;
  margin-top: 0;
`;

function CreateFood({ formToSubmit, setFormToSubmit }) {
  const [food, setFood] = useState(["", "", ""]);

  const changeFood = (event) => {
    const { name, value } = event.target;
    let newState = food.slice();
    newState[name].concat(value);
    setFood(newState);
    setFormToSubmit({ ...formToSubmit, foods: food });
  };

  const addFood = (event) => {
    event.preventDefault();
    const newState = food.slice();
    newState.push("");
    setFood(newState);
  };

  return (
    <FoodContainer>
      <LabelInputDiv>
        <LabelDiv>
          <label> Suggested Food</label>
        </LabelDiv>
        <BoxesDiv>
          {food.map((food, index) => (
            <StyledInput
              key={index}
              onChange={changeFood}
              value={food[index]}
              name={index}
              type="text"
            />
          ))}

          <button onClick={addFood}>Add Another Food Item</button>
        </BoxesDiv>
      </LabelInputDiv>
    </FoodContainer>
  );
}

export default CreateFood;
