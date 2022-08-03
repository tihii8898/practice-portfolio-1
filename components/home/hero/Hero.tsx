import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <Container>
      <Box
        sx={{
          borderRadius: "22px",
          backgroundImage: "linear-gradient(to right, #FBED96, #ABECD6)",
          paddingY: "20px",
          paddingX: "66px",
        }}
      >
        <Stack direction="column" alignItems="center">
          <Image
            src="https://res.cloudinary.com/dwpygd7bb/image/upload/v1659185420/portfolio-1/avt-portfolio-1_kaozqs.jpg"
            layout="fixed"
            width={65}
            height={65}
            alt="avatar"
            style={{
              borderRadius: "50%",
            }}
          />
          <Typography variant="h4">Olá, eu sou o Alê 🤙</Typography>
          <Typography fontWeight="bold" variant="h3" align="center">
            Desenvolvo ideias e ajudo a construir um mundo melhor através do
            software.
          </Typography>
          <Stack direction="row" spacing={2} justifyItems="center">
            <Button
              variant="contained"
              sx={{
                background: "#111827",
                borderRadius: "16px",
              }}
            >
              Contano
            </Button>
            <Typography>Download CV -{">"}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
