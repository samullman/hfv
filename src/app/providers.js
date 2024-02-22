"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/barlow-semi-condensed";
import "@fontsource-variable/source-code-pro";

const theme = extendTheme({
  fonts: {
    heading: `'Source Code Pro Variable', monospace`,
    body: `'Barlow Semi Condensed', sans-serif`,
  },
});

export function Providers({ children }) {
  return (
    <CacheProvider theme>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
