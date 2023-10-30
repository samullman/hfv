import { Box, Container } from "@chakra-ui/react";

function Component({ children }) {
  return <Box px={[0, 0, 20]} py={[10, 10, 20]}>{children} </Box>;
}

export default Component;
