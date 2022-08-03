import { Box, Stack } from "@mui/material";
import { LayoutProps } from "~/models/common";
import { Footer, Header } from "../common";

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack>
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
