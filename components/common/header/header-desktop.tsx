import { MenuTwoTone } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

import Image from "next/image";
import logo from "~/images/logo.svg";
import { ROUTE_LIST } from "./routes";

export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  return (
    <Box
      display={{
        xs: "none",
        md: "block",
      }}
      mt={7.5}
      mb={2.5}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Image src={logo} />

          <Typography display="inline" variant="h5" ml={1} fontWeight="bold">
            Achtenberg
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          {ROUTE_LIST.map((route) => (
            <Box key={route.path}>
              <Typography variant="h6" color={route.color}>
                {route.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
