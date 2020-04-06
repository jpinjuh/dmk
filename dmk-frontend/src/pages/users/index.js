// React
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "Modules/units/Users";

// MUI
import { Typography, CircularProgress } from "@material-ui/core";

const Users = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <Typography variant="h4">Users screen</Typography>
      {users.loading && <CircularProgress />}
      {users.data &&
        users.data.map(user => {
          return <Typography key={user.id}>{user.first_name}</Typography>;
        })}
    </>
  );
};

export default Users;
