import { Box, Heading } from "@chakra-ui/react";

import Container from "@/app/components/container";
import Section from "@/app/components/section";

export const metadata = {
  title: "Contact",
  description: "General Construction, with an edge!",
};

function Page() {
  return (
    <div>
      <Section>
        <Container>
          <Heading>Contact</Heading>
        </Container>
      </Section>
    </div>
  );
}

export default Page;
