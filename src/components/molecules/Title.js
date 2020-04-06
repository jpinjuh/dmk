// React
import React from "react";

// MUI
import { Box, Divider } from "@material-ui/core";

// Atoms
import Icon from "Components/atoms/UI/Icon";
import Text from "Components/atoms/UI/Text";

const Title = props => {
  const { title, icon } = props;
  return (
    <>
      <Box display="flex" mb={1}>
        <Box>
          <Icon icon={icon} color="primary" size="2.7rem" />
        </Box>
        <Box ml={1}>
          <Text title={title} variant="h4" color="primary" />
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default Title;
