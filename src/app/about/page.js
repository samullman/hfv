import { Box, Heading } from "@chakra-ui/react";

import Container from "@/app/components/container";
import Section from "@/app/components/section";

function Page() {
  return (
    <div>
      <Section>
        <Container>
          <Heading>About</Heading>
        </Container>
      </Section>
    </div>
  );
}

export default Page;
