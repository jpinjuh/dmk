// React
import React, { useState, useEffect } from "react";

// MUI
import { Typography, Button } from "@material-ui/core";

const FunctionComponent = () => {
  const [number, incrementNumber] = useState(0);

  useEffect(() => {
    console.log("Component is mounted");
  }, []);

  return (
    <>
      <Typography>Counter: {number}</Typography>
      <Button variant="outlined" onClick={() => incrementNumber(number + 1)}>
        Increment
      </Button>
    </>
  );
};

export default FunctionComponent;
