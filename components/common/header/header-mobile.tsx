import { MenuTwoTone } from "@mui/icons-material";
import { Box, Button, Stack, SwipeableDrawer, Typography } from "@mui/material";
import Image from "next/image";
import { KeyboardEvent, MouseEvent, useState } from "react";
import logo from "~/images/logo.svg";
import { ROUTE_LIST } from "./routes";

export interface HeaderMobileProps {}

export default function HeaderMobile(props: HeaderMobileProps) {
  const [swipeState, setSwipeState] = useState(false);
  const toggleDrawer =
    (bool: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setSwipeState(bool);
    };

  return (
    <Box
      display={{
        xs: "block",
        md: "none",
      }}
      mt={7.5}
      sx={{}}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Image src={logo} alt="logo" />

          <Typography display="inline" variant="h5" ml={1} fontWeight="bold">
            Achtenberg
          </Typography>
        </Box>
        <Button variant="outlined" onClick={toggleDrawer(!swipeState)}>
          <MenuTwoTone />
        </Button>
        <SwipeableDrawer
          anchor="top"
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          open={swipeState}
        >
          {ROUTE_LIST.map((route) => (
            <Box key={route.path}>
              <Typography color={route.color} variant="h6">
                {route.label}
              </Typography>
            </Box>
          ))}
        </SwipeableDrawer>
      </Stack>
    </Box>
  );
}
