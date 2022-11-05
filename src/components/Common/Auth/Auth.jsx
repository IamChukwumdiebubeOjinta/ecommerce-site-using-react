import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import {
  UserIcon,
  EnvelopeIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <form action="">
      <Stack spacing={3}>
        {isSignUp && (
          <>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<UserIcon className="w-6 h-6" />}
              />
              <Input type="text" placeholder="Username" variant={"flushed"} />
            </InputGroup>
          </>
        )}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EnvelopeIcon className="w-6 h-6" />}
          />
          <Input type="email" placeholder="Email" variant={"flushed"} />
        </InputGroup>

        {/* Password */}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<KeyIcon className="w-6 h-6" />}
          />
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            variant={"flushed"}
          />
          <motion.div whileHover={{ scale: 1.1, rotate: 0 }}>
            <InputRightElement width="4.5rem">
              <Button
                h="1.5rem"
                variant={"ghost"}
                colorScheme={"blackAlpha"}
                size="sm"
                onClick={handleClick}
              >
                {show ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </Button>
            </InputRightElement>
          </motion.div>
        </InputGroup>
        <Button>Submit</Button>
        <Button onClick={() => setIsSignUp(isSignUp => !isSignUp)}>
          {isSignUp ? 'Already a member?' : 'Are you new here?'}
        </Button>
      </Stack>
    </form>
  );
};

export default Auth;
