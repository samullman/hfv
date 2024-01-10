"use client";

import { IconButton, useColorMode } from "@chakra-ui/react";
import { LuSun, LuSunDim } from "react-icons/lu";

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      fontSize="2xl"
      size="lg"
      variant={"ghost"}
      rounded="lg"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <LuSun /> : <LuSunDim />}
    />
  );
}

export default ColorMode;
