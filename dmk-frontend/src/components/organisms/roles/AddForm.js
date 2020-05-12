// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

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
  const [submitted, setSubmitted] = useState(false);

  const newItem = useSelector(state => state.roles.oneItem);
  const errorMsg = useSelector(state => state.roles.postErrorMsg);

  useEffect(() => {
    if (newItem)
      setItemId(newItem.id)
  }, [newItem])

  useEffect(() => {
    return () => {
      let clearVal = inputs.filter(input => {
        input.value = '';
        input.validation = '';
        input.error = false;
        return input;
      })
      setInputs(clearVal)
    }
  }, [])

  useEffect(() => {
    if (submitted) {
      if (errorMsg.errorCode === 200) {
        setOpen(true)
        let clearVal = inputs.filter(input => {
          input.value = '';
          input.validation = '';
          input.error = false;
          return input;
        })
        
        setInputs(clearVal)
        setSubmitted(false)
      } else if(errorMsg.errorCode === 400){
        if(typeof errorMsg.description === 'object'){
          inputs.forEach(input => {
            Object.keys(errorMsg.description).forEach(desc => {
              if(input.name_in_db === desc){
                input.validation = errorMsg.description[desc][0];
                input.error = true;
              }
            })
          })
        }
        setSubmitted(false)
      }
      else {
        NotificationManager.error(errorMsg.description);
        setSubmitted(false)
      }
    }
  }, [errorMsg])

  const addItem = e => {
    e.preventDefault();

    const body = {};
    const arr = []

    inputs.forEach(input => {
      body[input.name_in_db] = input.value;
      arr.push(input.value)
    })
    setItem(arr)
    setSubmitted(true)
    dispatch(postData(`role`, body));
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
