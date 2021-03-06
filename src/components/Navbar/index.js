import React from "react";
import Badge from "../Badge";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export default function Nav() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <a href={"/"}>RecipeBae</a>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button className="theme-button" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Badge />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
