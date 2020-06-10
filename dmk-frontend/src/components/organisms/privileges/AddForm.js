// React
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

// MUI
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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
import { clearValidation } from "Modules/units/Validation";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: '#dcdeef',
    padding: '8px 8px 8px 24px'
  }
}));

const AddForm = ({open, setOpen}) => {
  const [inputs, setInputs] = useState(PrivilegeForm);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [item, setItem] = useState([]);
  const [itemId, setItemId] = useState('');

  const newItem = useSelector(state => state.privileges.oneItem);
  const validation = useSelector(state => state.validation);

  useEffect(() => {
    if (newItem)
      setItemId(newItem.id)
  }, [newItem])

  useEffect(() => {
    clearInputs()
    dispatch(clearValidation())
  }, [])

  const clearInputs = () => {
    setInputs(inputs.map(input => ({
      label: input.label,
      type: input.type,
      disabled: false,
      name_in_db: input.name_in_db,
      service: input.service,
      validation: null,
      error: false,
      value: ""
    })));
  }

  const addItem = e => {
    e.preventDefault();
    dispatch(clearValidation())
    const body = {};
    const arr = []
    inputs.forEach(input => {
      body[input.name_in_db] = typeof input.value === 'object' ? { id: input.value['id'] } : input.value;
      arr.push(input.value)
    })
    setItem(arr)
    dispatch(postData(`privilege`, body, clearInputs, setOpen));
  };

  const closeModal = () => {
    setOpen(false);
    setItem([]);
  }

  return (
    <>
      <Box>
        <Box className={classes.title}>
          <Title
            variant="h6"
            align={'left'}
            title={'Dodavanje privilegija'}
          />
        </Box>
        <Box mx={3} mt={2}>
          <form>
            <InputForm inputs={inputs} setInputs={setInputs} cols={4} spacing={2} validation={open ? null : validation}></InputForm>
            <Box mt={2}>
              <Button
                label="+ Dodaj privilegiju"
                onClick={addItem}
              />
            </Box>
          </form>
        </Box>
      </Box>

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
