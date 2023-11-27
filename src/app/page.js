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
  let image = useColorModeValue("/river.jpeg", "/river-2.jpeg");
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
          <Box maxWidth={"500px"} textAlign={"center"}>
            <Heading mb={2}>Property Development</Heading>
            <Text mb={4}>Central Texas</Text>

            <HStack justifyContent={"center"}>
              <Link href="/about" passHref>
                <Button colorScheme="blue">Learn more</Button>
              </Link>

              <Link href="/contact" passHref>
                <Button colorScheme="yellow">Contact</Button>
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
