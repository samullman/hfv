import Link from "next/link";
import { Box, Link as ChakraLink } from "@chakra-ui/react";
import MySidebar from "./sidebar";

function Header() {
  return (
    <div>
      <Box
        position="fixed"
        zIndex="1000"
        width="100vw"
        bg="white"
        py={2}
        px={5}
      >
        <Box
          maxWidth="1000px"
          margin="0 auto"
          display="flex"
          justifyContent={"space-between"}
          alignItems="baseline"
        >
          <Box title="title" pt="2px">
            <Link href="/" passHref>
              {" "}
              <ChakraLink>Huck Finn Ventures</ChakraLink>
            </Link>
          </Box>

          <Box title="hamburger">
            <MySidebar />
          </Box>
        </Box>
      </Box>

      <Box py={2} px={5}></Box>
    </div>
  );
}

export default Header;
