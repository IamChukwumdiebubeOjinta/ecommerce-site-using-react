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
import Auth from "../Auth/Auth";

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

function ChakraModel({ title, style, heading, danger }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <Box className="hover:underline cursor-pointer" onClick={onOpen} style={{background: style}}>
        {title}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          {/* FIxing the text */}
          <ModalHeader className="cursor-default">
          {!isSignUp ? "Sign Up" : "Login"}
            </ModalHeader>
          <ModalCloseButton className="!ring-0" />
          <ModalBody>
            <Auth />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant={"outline"}
              mr={3}
              onClick={onClose}
            >
              {danger}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChakraModel;
