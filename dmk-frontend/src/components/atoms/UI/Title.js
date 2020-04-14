// React
import React from "react";

// MUI
import { Box, Divider } from "@material-ui/core";

// Atoms
import Text from "Components/atoms/UI/Text";

const Title = props => {
  const { title, variant, align } = props;
  return (
    <>
      <Box display="flex" justifyContent={align}>
        <Box>
          <Text title={title} variant={variant} color="secondary" />
        </Box>
      </Box>
    </>
  );
};

export default Title;
