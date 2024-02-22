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
  let image = useColorModeValue("/ocean.jpeg", "/ocean.jpeg");
  return (
    <div>
      <Box
        minHeight="calc(100vh)"
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
            <Heading mb={2}>Creating Opportuniy</Heading>
            <Text mb={4}>Austin, TX</Text>

            <HStack justifyContent={"center"}>
              <Link href="/about" passHref>
                <Button colorScheme="blue">Our Philosophy</Button>
              </Link>

              <Link href="/contact" passHref>
                <Button>Contact</Button>
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
