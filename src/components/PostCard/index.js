import React, {lazy, Suspense} from "react";
import {
  Box,
  Image,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";

const MealModal = lazy(() => import("../MealModal"));

const renderLoader = () => <Spinner />;

function PostCard({
  strCategory,
  strInstructions,
  strArea,
  strYoutube,
  strMealThumb,
  strMeal,
}) {
  return (
    <Suspense fallback={renderLoader}>
      <Center py={8} px={4}>
        <Box
          maxW={"280px"}
          w="full"
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          _hover={{
            transform: "scale(1.03)",
          }}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              borderRadius="lg"
              w="full"
              mb={4}
              h={"full"}
              src={strMealThumb}
            />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {strArea}
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {strMeal}
            </Heading>
            <MealModal
              title={strMeal}
              description={strInstructions}
              video={strYoutube}
              category={strCategory}
            />
          </Stack>
        </Box>
      </Center>
    </Suspense>
  );
}

export default PostCard;
