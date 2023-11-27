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
        fontSize="xl"
        variant={"ghost"}
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
          <DrawerCloseButton />

          <DrawerBody>
            <Box mt={4} mb={2} fontSize="lg" fontWeight={600}>
              Huck Finn Ventures
            </Box>
            <Text title="subheader" mb={4} fontSize="sm" fontStyle={"italic"}>
              {/* Desig & Build */}
            </Text>
            <Stack>
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
