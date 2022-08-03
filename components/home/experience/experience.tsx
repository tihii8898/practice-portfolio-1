import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Image from "next/image";
import hi from "~/images/temp/hi.jpg";
import mysql from "~/images/temp/mysql.webp";
import nodejs from "~/images/temp/nodejs.webp";
import react from "~/images/temp/react.webp";
import Vector1 from "~/images/Vector1.svg";
import { Skill } from "~/models";

export interface ExperienceProps {}

const skillList: Skill[] = [
  {
    id: 1,
    name: "ReactJS",
    url: "https://res.cloudinary.com/dwpygd7bb/image/upload/v1659459782/portfolio-1/react_vxtavd.jpg",
    localUrl: react,
  },
  {
    id: 2,
    name: "NodeJS",
    url: "https://res.cloudinary.com/dwpygd7bb/image/upload/v1659459782/portfolio-1/nodejs_zdwmy9.jpg",
    localUrl: nodejs,
  },
  {
    id: 3,
    name: "My SQL",
    url: "https://res.cloudinary.com/dwpygd7bb/image/upload/v1659459782/portfolio-1/mysql_yoptrh.jpg",
    localUrl: mysql,
  },
];

export function Experience(props: ExperienceProps) {
  return (
    <Container
      sx={{
        // paddingX: { xs: 2, md: 5 },
        paddingY: 10,
      }}
    >
      <Stack alignItems={{ xs: "center", md: "flex-start" }}>
        <Box
          sx={{
            maxWidth: "320px",
            position: "relative",
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              position: "absolute",
              transform: {
                xs: "translateY(-80px) translateX(15px)",
                md: "translateY(-135px) translateX(10px)",
              },
              zIndex: "2",
            }}
          >
            Sobre mim
          </Typography>
          <Image src={Vector1} alt="vector" />
        </Box>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          mt={{ xs: 5, md: 0 }}
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Stack justifyContent="space-between" spacing={3}>
            <Stack
              direction="row"
              spacing={{ xs: 2, md: 6.5 }}
              maxWidth="472px"
            >
              <Divider
                flexItem
                orientation="vertical"
                sx={{
                  borderRightWidth: "medium",
                  borderColor: "black",
                }}
              />
              <Typography>
                Tenho 20 anos, estou em transição de carreira, vindo da área
                administrativa onde desenvolvi experiência com gestão de
                pessoas, gestão de empresas e negociação com cliente.
                <br />
                <br />
                Hoje construo aplicações fullstack!
              </Typography>
            </Stack>
            <Typography variant="h4" fontWeight="bold">
              Skills
            </Typography>
            <Stack direction="row" spacing={{ xs: 2, md: 7 }}>
              {skillList.map((skill, index) => (
                <Stack key={index} spacing={3}>
                  <Box
                    sx={{
                      maxWidth: "148px",
                      maxHeight: "145px",
                      background: lightBlue[50],
                      borderRadius: "41.0443px",
                      paddingTop: "11px",
                      paddingLeft: "3px",
                    }}
                  >
                    <Image
                      src={skill.localUrl || skill.url}
                      height={143}
                      width={143}
                      alt={skill.name}
                      style={{
                        background: "transparent",
                        boxShadow:
                          "0px 9.12096px 9.12096px rgba(0, 97, 138, 0.2), 0px 9.12096px 9.12096px rgba(0, 97, 138, 0.2)",
                      }}
                    />
                  </Box>
                  <Typography textAlign="center" variant="h5" fontWeight="bold">
                    {skill.name}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Box
            sx={{
              maxWidth: { xs: "100px", md: "394px" },
            }}
          >
            <Image src={hi} width={394} height={470} alt="hi" />
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
