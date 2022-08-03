import { LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import footerImg from "~/images/temp/footerImg.webp";

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Container
      sx={{
        backgroundColor: "rgba(17, 24, 39, 1)",
        borderRadius: "40px 40px 0 0",
        paddingLeft: 9,
      }}
    >
      <Stack
        direction="row"
        mx={{ xs: 3, md: 9 }}
        mt={15}
        mb={9}
        alignItems="center"
      >
        <Stack color="white" maxWidth="474px" spacing={4}>
          <Typography variant="h1">Tem alguma ideia?</Typography>
          <Typography variant="h5">Vamos construí-la juntos!</Typography>
          <Box width="fit-content">
            <Typography variant="h5">hello@achtenberg.io</Typography>
            <Divider
              sx={{
                borderColor: "white",
              }}
            />
          </Box>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                padding: "8px 10px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <Link href="" passHref>
                <a>
                  <Twitter
                    sx={{
                      color: lightBlue[500],
                    }}
                  />
                </a>
              </Link>
            </Box>
            <Box
              sx={{
                padding: "8px 10px",
                backgroundColor: lightBlue[600],
                borderRadius: "10px",
              }}
            >
              <Link href="" passHref>
                <a>
                  <LinkedIn
                    sx={{
                      color: "white",
                    }}
                  />
                </a>
              </Link>
            </Box>
          </Stack>
        </Stack>
        <Box display={{ xs: "none", md: "block" }}>
          <Image
            src={footerImg}
            style={{
              backgroundColor: lightBlue[400],
              borderRadius: "35px",
            }}
          />
        </Box>
      </Stack>
    </Container>
  );
}
