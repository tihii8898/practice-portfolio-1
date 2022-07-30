import { Box, Stack, Typography } from "@mui/material";
import { LayoutProps } from "~/models/common";
import { Header } from "../common";

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="90vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
    </Stack>
  );
}
