"use client";

import Link from "next/link";
import {
  Box,
  Link as ChakraLink,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import MySidebar from "./sidebar";
import ColorMode from "./colorMode";

function Header() {
  let bg = useColorModeValue("white", "gray.800");

  return (
    <div>
      <Box
        position="fixed"
        zIndex="1000"
        width="100vw"
        bg={bg}
        py={[3, 3, 2]}
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
              <ChakraLink
                fontSize={"lg"}
                fontWeight={600}
                _hover={{ textDecoration: "none" }}
              >
                Huck Finn Ventures
              </ChakraLink>
            </Link>
          </Box>

          <HStack>
            <Box title="toggle-color-mode">
              <ColorMode />
            </Box>

            <Box title="hamburger">
              <MySidebar />
            </Box>
          </HStack>
        </Box>
      </Box>

      <Box py={2} px={5}></Box>
    </div>
  );
}

export default Header;
