/**
|--------------------------------------------------
| IMPORTS
|--------------------------------------------------
*/

import { NotificationManager } from "react-notifications";
import { getFunc, postFunc } from "../../services/mainApiServices";

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

export const getData = () => async dispatch => {
  dispatch({ type: GET_DATA_REQ });

  const response = await getFunc("district");
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
    dispatch(getData());
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
