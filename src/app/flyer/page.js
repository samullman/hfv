import {
  Box,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Divider,
  HStack,
} from "@chakra-ui/react";

import Container from "@/app/components/leftAligned";
import Section from "@/app/components/section";
import Link from "next/link";
import Image from "next/image";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

export const metadata = {
  title: "About",
};

function Page() {
  const services = [
    "Window Cleaning",
    "Gutter/Roof Cleaning",
    "House Cleaning",
    "Light Installations",
    "Solar Panel Cleaning",
  ];

  return (
    <div>
      <Section>
        <Container>
          <Box height="100px" width="100px" position="relative" mb={2}>
            <Image src="/group.png" layout="fill" objectFit="contain" />
          </Box>

          <Box mb={6}>House Services & Property Development</Box>

          <Box mb={6} fontSize="xl">
            Making the world a better place one stop at a time.
          </Box>

          <Heading size="md" mb={4}>
            Recommended Services
          </Heading>

          <SimpleGrid
            columns={2}
            mb={3}
            spacingX={4}
            spacingY={3}
            maxWidth={"54%"}
          >
            {services.map((el, idx) => {
              return (
                <Box key={"item" + idx}>
                  <HStack spacing={3}>
                    <Box>
                      <MdCheckBoxOutlineBlank />
                    </Box>
                    <Box fontSize="xl">{el}</Box>
                  </HStack>
                </Box>
              );
            })}
          </SimpleGrid>

          <Box>
            <HStack spacing={3}>
              <Box>
                <MdCheckBoxOutlineBlank />
              </Box>
              <Box fontSize="xl">Other</Box>
            </HStack>
          </Box>

          <Box height={2} />

          <Box
            maxW={"54%"}
            borderTop="1px"
            borderColor="gray.300"
            paddingY={"16px"}
          ></Box>

          <Box
            maxW={"54%"}
            borderTop="1px"
            borderColor="gray.300"
            paddingY={"16px"}
          ></Box>

          <Box
            maxW={"54%"}
            borderTop="1px"
            borderColor="gray.300"
            paddingY={"16px"}
          ></Box>

          <Box
            maxW={"54%"}
            borderBottom="1px"
            borderTop="1px"
            borderColor="gray.300"
            paddingY={"8px"}
          >
            <Box color="gray.800">Est.</Box>
          </Box>

          <Box
            maxW={"54%"}
            borderBottom="1px"
            borderColor="gray.300"
            paddingY={"8px"}
          >
            <Box color="gray.800">Duration</Box>
          </Box>

          <Heading size="md" mb={6} mt={10}>
            Team
          </Heading>

          <SimpleGrid columns={2} maxWidth="54%">
            <Box>
              <Box>Sam Ullman</Box>
              Owner
            </Box>

            <Box>
              <Box>Cristian Gomez</Box>
              Account Representative
            </Box>
          </SimpleGrid>

          <Heading size="md" mb={6} mt={10}>
            Contact
          </Heading>

          <SimpleGrid columns={2} spacing={4} maxWidth={"56%"}>
            <Box>
              <Box>@huckfinnventures</Box>
              <Box>http://hf.ventures</Box>
              <Box>(971) 323-5674</Box>
            </Box>

            <Box>
              <Box
                position="relative"
                bottom={4}
                height="140px"
                width="140px"
                float={"right"}
                position="relative"
                right={10}
                mb={2}
              >
                <Image src="/qr.png" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </SimpleGrid>

          {/* <Heading size="lg" mb={5}>
              Partners
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={[10]}>
              <a href="https://sambuilds.co/" target="_blank">
                <Box
                  _active={{
                    transform: "scale(0.97)",
                    transition: "0.2s ease",
                  }}
                >
                  <Box
                    height="200px"
                    bg="green.200"
                    mb={2}
                    rounded="sm"
                    overflow="hidden"
                    position="relative"
                  >
                    <Image src="/builder.jpg" layout="fill" objectFit="cover" />
                  </Box>
                  <Box>sambuilds.co</Box>
                </Box>
              </a>
            </SimpleGrid> */}
        </Container>
      </Section>
    </div>
  );
}

export default Page;
