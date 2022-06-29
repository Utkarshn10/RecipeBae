import React from "react";
import image from "../../images/error.webp";
import {Box,Alert,AlertIcon,AlertTitle,AlertDescription} from "@chakra-ui/react"
// Page to show Error for invalid searches
function Error() {
  return (
    <Box>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>No Meals were found</AlertTitle>
        </Alert>
      <Box className="error-heading">
        <img width="100%" alt="error" height="30%" src={image} />
      </Box>
    </Box>
  );
}

export default Error;
