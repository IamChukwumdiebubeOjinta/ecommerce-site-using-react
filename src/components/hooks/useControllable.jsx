import { Button, useControllableState } from "@chakra-ui/react";
import { useState } from "react";

export default function useControllable() {
  const [value, setValue] = useState(1);

  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  });

  return (
    <div>
      <Button onClick={() => setInternalValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {internalValue}
      </Box>
      <Button onClick={() => setInternalValue(value - 1)}>-</Button>
    </div>
  );
}
