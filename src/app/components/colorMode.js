"use client";

import { IconButton, useColorMode } from "@chakra-ui/react"
import { LuSun, LuSunDim } from "react-icons/lu";

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton variant={"ghost"} fontSize={"xl"} onClick={toggleColorMode} icon={colorMode === 'light' ? <LuSun /> : <LuSunDim />} />
  )
}


export default ColorMode;
