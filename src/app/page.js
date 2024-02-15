"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Box,
  HStack,
  Heading,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Container from "@/app/components/container";
import Section from "@/app/components/section";

export default function Home() {
  let image = useColorModeValue("/austin.jpg", "/austin.jpg");
  return (
    <div>
      <Box
        minHeight="calc(100vh - 1rem)"
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
          <Box maxWidth={"500px"} textAlign={"center"}>
            <Heading mb={2}>Business & Personal Development</Heading>
            <Text mb={4}>Austin, TX 🇺🇸</Text>

            <HStack justifyContent={"center"}>
              <Link href="/about" passHref>
                <Button
                  rounded="full"
                  _hover={{ opacity: 0.84 }}
                  size="lg"
                  colorScheme="blue"
                >
                  Learn more
                </Button>
              </Link>

              <Link href="/contact" passHref>
                <Button
                  rounded="full"
                  size="lg"
                  _hover={{ opacity: 0.84 }}
                  colorScheme="yellow"
                >
                  Contact
                </Button>
              </Link>
            </HStack>
          </Box>
        </Box>

        <Image src={image} layout="fill" objectFit="cover" />
      </Box>

      <Box id="learn-more" height="100vh" display="none">
        <Section>
          <Container>Learn more</Container>
        </Section>
      </Box>
    </div>
  );
}
