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
            Huck Finn Ventues is a unique design & build company based in Austin, TX.


          </Box>

          <Box mb={2}>
            It{"'"}s an exciting time to be a builder.
          </Box>


        </Container>
      </Section>
    </div>
  );
}

export default Page;
