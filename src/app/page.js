import Image from "next/image";

import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box height="100vh" position="relative">
      <Image src="/river.jpeg" layout="fill" objectFit="cover" />
    </Box>
  );
}
