import { Box, Heading, Link as ChakraLink } from "@chakra-ui/react";

import Container from "@/app/components/container";
import Section from "@/app/components/section";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "General Construction, with an edge!",
};

function Page() {
  return (
    <div>
      <Section>
        <Container>
          <Heading mb={5}>Services</Heading>

          <Box mb={2}>
            Huck Finn Ventues is a unique <i>Design & Build</i> company in the
            Austin, TX area. We work with fantastic contractors and partners to
            bring everlasting designs to life.
          </Box>

          <Box>
            <Link href="/contact" passHref>
              <ChakraLink>Hire us</ChakraLink>
            </Link>
            .
          </Box>
        </Container>
      </Section>
    </div>
  );
}

export default Page;
