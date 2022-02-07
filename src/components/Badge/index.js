import React from "react";
import {Flex, Link, Box, Text} from "@chakra-ui/react";
import {IoLogoGithub} from "react-icons/io5";

// Navbar Github Badge
function index() {
  return (
    <Link href="https://github.com/Utkarshn10">
      <Flex>
        <IoLogoGithub size={"50px"}></IoLogoGithub>
        <Box ml="3" variant="outline">
          <Text fontWeight="bold">Utkarsh Nagar</Text>
        </Box>
      </Flex>
    </Link>
  );
}

export default index;
