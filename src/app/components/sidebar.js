"use client";

import Link from "next/link";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Button,
  Heading,
  Stack,
  Box,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

import { LuMenu } from "react-icons/lu";
import { useRef } from "react";

function Component() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const residentialServices = [
    "Window Cleaning",
    "Gutter Cleaning/Installation",
    "Lights/Security Install",
    "Painting",
    "Installations",
    "Mounting",
    "Plumbing (Basic)",
    "Garage Overhaul",
    "Junk Removal",
  ];

  const commercialServices = [
    "Window Cleaning",
    "Gutter Cleaning/Installation",
    "Lights/Security Install",
    "Painting",
    "Installations",
    "Mounting",
    "Plumbing (Basic)",
    "Garage Overhaul",
    "Junk Removal",
  ];

  const pages = [
    {
      title: "Home",
      slug: "/",
    },

    {
      title: "About",
      slug: "/about",
    },

    // {
    //   title: "Gallery",
    //   slug: "/gallery",
    // },

    // {
    //   title: "Services",
    //   slug: "/services",
    // },

    {
      title: "Contact",
      slug: "/contact",
    },
  ];
  return (
    <>
      <IconButton
        fontSize="2xl"
        size="lg"
        variant={"ghost"}
        rounded="lg"
        ref={btnRef}
        icon={<LuMenu />}
        onClick={onOpen}
      ></IconButton>

      <Drawer
        isOpen={isOpen}
        placement="right"
        size="sm"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton rounded="lg" size="lg" />

          <DrawerBody>
            <Box mt={4} mb={10} fontSize="xl" fontWeight={600}>
              Huck Finn Ventures
            </Box>
            <Text title="subheader" mb={4} fontSize="sm" fontStyle={"italic"}>
              {/* Desig & Build */}
            </Text>

            <Stack mb={10} spacing={4} fontSize="lg">
              {pages.map((el, idx) => {
                return (
                  <Box key={"drawer-link-" + idx}>
                    <Link passHref href={el.slug}>
                      <ChakraLink onClick={onClose}>{el.title}</ChakraLink>
                    </Link>
                  </Box>
                );
              })}

              <Box mt={10}>
                {/* <Button
                  as={ChakraLink}
                  href="https://form.jotform.com/240057113782047"
                  target="_blank"
                  colorScheme="orange"
                  rounded="full"
                  _hover={{ opacity: 0.84, textDecoration: "none" }}
                  size="lg"
                >
                  Book Now!
                </Button> */}
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Component;
