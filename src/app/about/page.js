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
          <Heading mb={5}>About</Heading>

          <Box mb={2}>
            Huck Finn Ventues is a design & build company based in Austin, TX.
          </Box>
        </Container>
      </Section>
    </div>
  );
}

export default Page;
