import {
  Box,
  Heading,
  Link as ChakraLink,
  HStack,
  Divider,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

import Container from "@/app/components/container";
import Section from "@/app/components/section";

import { LuPhoneCall, LuMail, LuMapPin, LuInstagram } from "react-icons/lu";

export const metadata = {
  title: "Contact",
  description: "Huck Finn Ventures",
};

function Page() {
  return (
    <div>
      <Section>
        <Container>
          <Box width="100%">
            <Heading mt={5} mb={10}>
              Contact
            </Heading>
          </Box>

          {/* <HStack>
            <Box>
              <LuMapPin />
            </Box>

            <Box>
              <ChakraLink href="https://maps.app.goo.gl/s1C5ECH4Z2hiN1jh9">
                Austin, TX
              </ChakraLink>
            </Box>
          </HStack> */}

          <Box width="100%">
            <HStack mb={2}>
              <Box>
                <LuPhoneCall />
              </Box>

              <Box>
                <ChakraLink href="tel:9713235674">971-323-5674</ChakraLink>
              </Box>
            </HStack>

            <HStack mb={2}>
              <Box>
                <LuMail />
              </Box>

              <Box>
                <ChakraLink href="mailto:hello@hf.ventures">
                  hello@hf.ventures
                </ChakraLink>
              </Box>
            </HStack>

            <HStack>
              <Box>
                <LuInstagram />
              </Box>

              <Box>
                <ChakraLink
                  href="https://instagram.com/huckfinnventures"
                  target="_blank"
                >
                  Instagram
                </ChakraLink>
              </Box>
            </HStack>
          </Box>
          {/*
          <Divider my={5} />

          <SimpleGrid columns={[1, 1, 2]} spacing={[3, 4, 5]} mb={[3, 4, 5]}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input />
            </FormControl>

            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input />
            </FormControl>

            <FormControl>
              <FormLabel>Company</FormLabel>
              <Input />
            </FormControl>

            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
          </SimpleGrid>

          <Box mb={3}>
            <Button colorScheme="blue">Submit</Button>
          </Box>

          <Box color="red.500">* Form under construction</Box> */}
          {/* <Divider my={5} /> */}
        </Container>
      </Section>
    </div>
  );
}

export default Page;
