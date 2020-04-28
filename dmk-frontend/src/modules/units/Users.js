/**
|--------------------------------------------------
| IMPORTS
|--------------------------------------------------
*/

import { NotificationManager } from "react-notifications";
import { getFunc, postFunc, deleteFunc, putFunc } from "../../services/mainApiServices";

/**
|--------------------------------------------------
| TYPES
|--------------------------------------------------
*/

const GET_DATA_REQ = "GET_DATA_REQ";
const GET_DATA_SCS = "GET_DATA_SCS";
const GET_DATA_FLR = "GET_DATA_FLR";

/**
|--------------------------------------------------
| ACTIONS
|--------------------------------------------------
*/

export const getData = (url) => async dispatch => {
  dispatch({ type: GET_DATA_REQ });

  const response = await getFunc(url);
  console.log(response)
  if (response.status.errorCode === 200) {
    dispatch({ type: GET_DATA_SCS, payload: response.data });
  } else {
    NotificationManager.error(response.status.description);
    dispatch({ type: GET_DATA_FLR });
  }
};

export const postData = (url, body) => async dispatch => {

  const response = await postFunc(url, body);

  if (response.status.errorCode === 200) {
    NotificationManager.success(response.status.description);
    dispatch(getData('user'));
  } else {
    NotificationManager.error(response.status.description);
  }
};

export const deleteData = url => async dispatch => {

  const response = await deleteFunc(url);

  if (response.status.errorCode === 200) {
    NotificationManager.success(response.status.description);
    dispatch(getData('user'));
  } else {
    NotificationManager.error(response.status.description);
  }
};

export const putData = (url, body) => async dispatch => {
  /* const responseItemProps = Object.keys((await getFunc(url)).data);
  const response1 = await getFunc(url)

  const itemProps =  Object.keys(item);
  let body = {};

  responseItemProps.forEach(prop => {
    itemProps.forEach(iProp => {
      if(prop === iProp){
        body[prop] = response1.data[prop];
      }
    })
  }) */
  console.log(body)
  const response = await putFunc(url, body);

  if (response.status.errorCode === 200) {
    NotificationManager.success(response.status.description);
    dispatch(getData('user'));
  } else {
    NotificationManager.error(response.status.description);
  }
};

export const activateData = (url, body) => async dispatch => {

  const response = await postFunc(url, body);

  if (response.status.errorCode === 200) {
    NotificationManager.success(response.status.description);
    dispatch(getData('user'));
  } else {
    NotificationManager.error(response.status.description);
  }
};
/**
|--------------------------------------------------
| REDUCERS
|--------------------------------------------------
*/

const INIT_STATE = {
  data: ""
};

export default function reducer(state = INIT_STATE, action = {}) {
  switch (action.type) {
    case GET_DATA_REQ:
      return {
        ...state,
        loading: true
      };
    case GET_DATA_SCS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case GET_DATA_FLR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
