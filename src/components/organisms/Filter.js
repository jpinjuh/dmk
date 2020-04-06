// React
import React, { useState } from "react";

// Atoms
import Button from "Components/atoms/buttons/Button";

// Molecules
import InputForm from "Components/molecules/InputForm";

const Filter = props => {
  const [inputs, setInputs] = useState([
    {
      type: "text",
      value: "",
      label: "First name",
      name_in_db: "first_name"
    },
    { type: "number", value: "", label: "Phone", name_in_db: "phone" },
    {
      type: "autocomplete",
      value: { label: "", id: "" },
      label: "Guests",
      name_in_db: "guest_id",
      service: "guest/autocomplete"
    }
  ]);

  const { screenId } = props;

  const sendToServer = () => {
    const jsonObject = {};

    inputs.forEach(input => {
      if (input.type === "autocomplete") {
        jsonObject[input.name_in_db] = input.value.id;
      } else {
        jsonObject[input.name_in_db] = input.value;
      }
    });

    console.log(jsonObject);
  };

  return (
    <>
      <InputForm setInputs={setInputs} inputs={inputs} />
      <Button label="Ma ja bola" onClick={sendToServer} />
    </>
  );
};

export default Filter;
