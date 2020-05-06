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
import { PrivilegeForm } from 'Pages/privileges/model/privilege'

// Organisms
import EditModal from 'Components/organisms/privileges/EditModal'

// Action
import { postData } from "Modules/units/Privileges";

const AddForm = () => {
  const [inputs, setInputs] = useState(PrivilegeForm);
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);
  const [itemId, setItemId] = useState('');
  const [open, setOpen] = useState(false);

  const newItem = useSelector(state => state.privileges.oneItem);
  const items = useSelector(state => state.privileges);

  useEffect(() => {
    if(newItem)
    setItemId(newItem.id)
  }, [newItem])

  const addItem = e => {
    e.preventDefault();

    const body = {};
    const arr = []

    inputs.forEach(input => {
      body[input.name_in_db] = input.value.hasOwnProperty('id') ? { id: input.value['id'] } : input.value;;
      arr.push(body[input.name_in_db])
    })
    setItem(arr)
    
    dispatch(postData(`privilege`, body));

    let clearVal = inputs.filter(input => {
      input.value = '';
      return input;
    });
    
    if (!items.data.some(item => body.permission.id === item.permissions_id && body.role.id === item.roles_id)){
      setTimeout(() => {
        setOpen(true)
      }, 500);
    }
    
    setInputs(clearVal)
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
          title={'Dodaj privilegiju'}
        />
      </Box>
      <form>
        <InputForm inputs={inputs} setInputs={setInputs}></InputForm>
        <Box mt={2}>
          <Button
            label="+ Dodaj privilegiju"
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
