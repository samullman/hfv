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
            We do General Construction in the Central Texas area: carpentry,
            concrete, demolition, excavation, and small builds.{" "}
          </Box>

          <Box>
            <Link href="/contact" passHref>
              <ChakraLink>Hire us</ChakraLink>
            </Link>{" "}
            for projects <b>big</b> and <i>small</i>.
          </Box>
        </Container>
      </Section>
    </div>
  );
}

export default Page;
