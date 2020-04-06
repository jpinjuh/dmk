import { getFunc } from "Services/mainApiServices";

import { NotificationManager } from "react-notifications";

export const getData = async (setData, url) => {
  const response = await getFunc(url);

  if (response.status.errorCode === 200) {
    setData(response.data);
  } else {
    NotificationManager.error(response.status.description);
  }
};

export const getDataa = async (setData, url) => {
  const response = await getFunc(url);

  if (response.status.errorCode === 200) {
    setData(response.data);
  } else {
    NotificationManager.error(response.status.description);
  }
};
