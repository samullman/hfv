import { Box, Heading, Link as ChakraLink } from "@chakra-ui/react";

import Container from "@/app/components/container";
import Section from "@/app/components/section";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Huck Finn Ventures",
};

function Page() {
  return (
    <div>
      <Section>
        <Container>
          <Heading mb={5}>About</Heading>

          <Box mb={2}>Under construction.</Box>
        </Container>
      </Section>
    </div>
  );
}

export default Page;
