import {
  Button,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

const FaqPopover = ({ text }) => {
  return (
    <div>
      <Popover className="max-w-[200px] w-full">
        <PopoverTrigger>{text}</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />

          <PopoverBody className="!ring-0 flex flex-col">
            <Link>Faq</Link>
            <Link>About</Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FaqPopover;
