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
        rounded="full"
        ref={btnRef}
        icon={<LuMenu />}
        onClick={onOpen}
      ></IconButton>

      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent textAlign="center">
          <DrawerCloseButton rounded="full" size="lg" />

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
            </Stack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Component;
