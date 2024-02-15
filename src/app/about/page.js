import {
  Box,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

import Container from "@/app/components/leftAligned";
import Section from "@/app/components/section";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <div>
      <Section>
        <Container>
          <Box>
            <Heading mt={5} mb={10}>
              About
            </Heading>

            <Box mb={10}>Coming soon...</Box>

            <Heading mb={10} letterSpacing={"2px"}>
              🌎
            </Heading>

            {/* <Heading size="lg" mb={5}>
              Team
            </Heading>
            <Box mb={10}>Sam Ullman</Box> */}

            {/* <Divider mb={10} /> */}

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
          </Box>
        </Container>
      </Section>
    </div>
  );
}

export default Page;
