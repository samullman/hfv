import Link from "next/link";
import Image from "next/image";

import { Box, HStack, Heading, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Box
        height="100vh"
        position="relative"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          position="relative"
          zIndex={5}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box maxWidth={"500px"} textAlign={"center"} mb={6}>
            <Heading>General Construction in the Austin, TX area!</Heading>
          </Box>

          <Box>
            <HStack>
              <Button
                colorScheme="blue"
                as="a"
                href="#learn-more"
                scrollBehavior="smooth"
              >
                Learn more
              </Button>

              <Link href="/contact" passHref>
                <Button colorScheme="yellow">Contact</Button>
              </Link>
            </HStack>
          </Box>
        </Box>
        <Image src="/river.jpeg" layout="fill" objectFit="cover" />
      </Box>

      <Box id="learn-more" height="100vh"></Box>
    </div>
  );
}
