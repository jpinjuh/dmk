// React
import React from "react";

// MUI
import { Box, Divider } from "@material-ui/core";

// Atoms
import Text from "Components/atoms/UI/Text";

const Title = props => {
  const { title, icon } = props;
  return (
    <>
      <Box mb={7} display="flex" justifyContent="center">
        <Box>
          <Text title={title} variant="h3" color="secondary" />
        </Box>
      </Box>
    </>
  );
};

export default Title;
