import { Box } from "@mui/material";
import * as React from "react";
import { LayoutProps } from "~/models/common";

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <Box>
      <div>Empty Layout</div>
      <div>{children}</div>
    </Box>
  );
}
