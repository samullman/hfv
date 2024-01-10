import {
  Box,
  Heading,
  Link as ChakraLink,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import Container from "@/app/components/container";
import Section from "@/app/components/section";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Huck Finn Ventures",
};

function Page() {
  const SERVICES = [
    {
      title: "Gym Cleaning",
      slug: "gym-cleaning",
    },

    {
      title: "Store Cleaning",
      slug: "store-cleaning",
    },

    {
      title: "Solar Panel Cleaning",
      slug: "solar-panel-cleaning",
    },
  ];

  return (
    <div>
      <Section>
        <Container>
          <Heading mb={5}>Services</Heading>

          <Box mb={10}>
            We service Commercial and Residential properties with excellence in
            mind. We're here for your hard-to-reach jobs and look forward to
            handling them with professionalism and class.
          </Box>

          <Box width="100%">
            <SimpleGrid columns={[1, 1, 2]} mb={10} spacing={4}>
              {SERVICES.map(({ title, slug }, idx) => {
                return (
                  <Box key={"service-" + idx}>
                    <Heading size="lg">{title}</Heading>
                  </Box>
                );
              })}
            </SimpleGrid>

            <Box>
              <Button
                as={ChakraLink}
                href="https://form.jotform.com/240057113782047"
                target="_blank"
                colorScheme="orange"
                rounded="full"
                _hover={{ opacity: 0.84, textDecoration: "none" }}
                size="lg"
              >
                Book Now!
              </Button>
              .
            </Box>
          </Box>
        </Container>
      </Section>
    </div>
  );
}

export default Page;
