"use client";

import Link from "next/link";
import {
  Box,
  Link as ChakraLink,
  HStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import MySidebar from "./sidebar";
import ColorMode from "./colorMode";

function Header() {
  let bg = useColorModeValue("#ffffff77", "gray.800");

  return (
    <div>
      <Box
        position="fixed"
        zIndex="1000"
        width="100vw"
        bg={bg}
        backdropFilter="blur(2px)"
        py={[3, 3, 4]}
        px={5}
      >
        <Box
          maxWidth="1000px"
          margin="0 auto"
          display="flex"
          justifyContent={"space-between"}
          alignItems="baseline"
        >
          <Box title="title" pt={1}>
            <Link href="/" passHref>
              {" "}
              <ChakraLink
                fontSize={"xl"}
                fontWeight={"bold"}
                _hover={{ textDecoration: "none" }}
              >
                Huck Finn Ventures
              </ChakraLink>
            </Link>
          </Box>

          <HStack>
            <Box title="hamburger">
              <MySidebar />
            </Box>
          </HStack>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
