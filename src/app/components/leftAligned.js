import { Box } from "@chakra-ui/react";

function Component({ children }) {
  return (
    <Box px={5} py={2}>
      <Box maxWidth={"1000px"} margin="0 auto">
        {children}
      </Box>
    </Box>
  );
}

export default Component;
