import { Box, Button, IconButton } from "@chakra-ui/react";

import { LuMenu } from "react-icons/lu";

function Header() {
  return (
    <Box
      position="fixed"
      zIndex="1000"
      width="100vw"
      bg="white"
      py={2}
      px={5}
      borderBottom={"1px"}
      borderBottomColor={"gray.400"}
    >
      <Box
        maxWidth="1000px"
        margin="0 auto"
        display="flex"
        justifyContent={"space-between"}
        alignItems="baseline"
      >
        <Box title="title" pt="2px">
          Huck Finn Ventures
        </Box>

        <Box title="hamburger">
          <IconButton
            fontSize="xl"
            variant={"ghost"}
            icon={<LuMenu />}
          ></IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
