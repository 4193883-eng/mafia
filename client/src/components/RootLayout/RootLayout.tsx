import { MoonIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <IconButton
        aria-label="toggle dark mode"
        pos={"absolute"}
        top={2}
        right={2}
        icon={<MoonIcon />}
        onClick={useColorMode().toggleColorMode}
      />
      <Outlet />
    </>
  );
}
