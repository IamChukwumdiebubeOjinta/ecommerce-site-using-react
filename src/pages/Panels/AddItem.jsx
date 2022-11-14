import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import AddForm from "./AddForm";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: "0.1",
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function AddItem({ title, style, heading, danger }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <Box
        className=" cursor-pointer"
        onClick={onOpen}
        style={{ background: style }}
      >
        <Button className="sm:flex gap-2 hidden">Add New</Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          {/* FIxing the text */}
          <ModalHeader className="cursor-default">{"Add Item"}</ModalHeader>
          <ModalCloseButton className="!ring-0" />
          <form>
            <ModalBody>
              <AddForm />
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="green"
                variant={"solid"}
                mr={3}
                onClick={onClose}
              >
                Add
              </Button>
              <Button
                colorScheme="red"
                variant={"outline"}
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddItem;
