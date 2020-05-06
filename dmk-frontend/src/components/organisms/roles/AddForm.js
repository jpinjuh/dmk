// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// MUI
import { Box } from "@material-ui/core";

// Atoms
import Button from "Components/atoms/buttons/Button";
import Title from "Components/atoms/UI/Title";

// Molecules
import InputForm from "Components/molecules/InputForm"

// Model
import { RoleForm } from 'Pages/roles/model/role'

// Organisms
import EditModal from 'Components/organisms/roles/EditModal'

// Action
import { postData } from "Modules/units/Roles";

const AddForm = () => {
  const [inputs, setInputs] = useState(RoleForm);
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);
  const [itemId, setItemId] = useState('');
  const [open, setOpen] = useState(false);

  const newItem = useSelector(state => state.roles.oneItem);
  const items = useSelector(state => state.roles);

  useEffect(() => {
    if(newItem)
    setItemId(newItem.id)
  }, [newItem])

  const addItem = e => {
    e.preventDefault();

    const body = {};
    const arr = []
    let isCorrect = false;
    let counter = 0;

    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
      arr.push(input.value)

      if(input.validation.error === false){
        counter++;
      }
    })
    setItem(arr)
    if(counter === inputs.length)
    isCorrect = true
    
    if(isCorrect){
      dispatch(postData(`role`, body));

      let clearVal = inputs.filter(input => {
        input.value = '';
        return input;
      })
      if(!items.data.some(item => body.name === item.name))
        setOpen(true)
      setInputs(clearVal)
    }
  };

  const closeModal = () => {
    setOpen(false);
    setItem([]);
  }

  
  return (
    <>
      <Box mb={3}>
        <Title
          variant="h5"
          align={'left'}
          title={'Dodaj rolu'}
        />
      </Box>
      <form>
        <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
        <Box mt={2}>
          <Button
            label="+ Dodaj rolu"
            onClick={addItem}
          />
        </Box>
      </form>

      <EditModal
        onOpen={open}
        closeModal={closeModal}
        item={item}
        itemId={itemId}
      ></EditModal>
    </>
  );
};

export default AddForm;
