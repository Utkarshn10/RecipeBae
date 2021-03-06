import React from "react";
import "./styles.css";
import ReactPlayer from "react-player/lazy";
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function MealModal({title, description, video, category}) {
  const {isOpen, onOpen, onClose} = useDisclosure();

  //----- Not being used , will be used in future

  // const [desc, setDesc] = useState("");

  // function handleProcedure() {
  //   setDesc(
  //     description.split(".").map((value, index) => {
  //       return (
  //         <Fragment key={index}>
  //           • {value}
  //           <br />
  //         </Fragment>
  //       );
  //     })
  //   );
  // }
  
  // Modal to show recipe when clicked on card
  
  return (
    <>
      <Button className="recipe-button" colorScheme="red" onClick={onOpen}>
        Recipe
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {title}
            <Box className="row" alignItems="center">
              <Box
                color="gray.400"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                as="h5"
                style={{fontSize: "1rem"}}
              >
                {category}
              </Box>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h4>Procedure :</h4>
            <Box as="span"> {description}</Box>
          </ModalBody>
          <ModalBody>
            <ReactPlayer width="100%" url={video}></ReactPlayer>
          </ModalBody>
          <ModalFooter>
            <Button
              className="close-button"
              colorScheme="red"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default MealModal;
