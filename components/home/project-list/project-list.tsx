import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { Project } from "~/models";
import { ProjectCard } from "./project/project";

export interface ProjectListProps {}

const projectList: Project[] = [
  {
    id: 1,
    title: "Shopping cart",
    tagList: [
      { name: "React", color: "#2196f3" },
      { name: "Javascript", color: "#eeff41" },
    ],
    imageUrl:
      "https://res.cloudinary.com/dwpygd7bb/image/upload/v1659356998/portfolio-1/shopping-cart_jzvsnc.jpg",
    githubUrl: "https://github.com/tihii8898",
    deployUrl: "",
  },
  {
    id: 2,
    title: "Trivia",
    tagList: [
      { name: "React", color: "#2196f3" },
      { name: "Javascript", color: "#eeff41" },
      { name: "Node JS", color: "#00e676" },
    ],
    imageUrl:
      "https://res.cloudinary.com/dwpygd7bb/image/upload/v1659356998/portfolio-1/trivia_tpabcl.jpg",
    githubUrl: "https://github.com/tihii8898",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Trybetunes",
    tagList: [
      { name: "React", color: "#2196f3" },
      { name: "API", color: "#7c4dff" },
    ],
    imageUrl:
      "https://res.cloudinary.com/dwpygd7bb/image/upload/v1659356998/portfolio-1/trybetunes_gxora5.jpg",
    githubUrl: "https://github.com/tihii8898",
    deployUrl: "",
  },
];

export function ProjectList(props: ProjectListProps) {
  return (
    <Container
      sx={{
        paddingY: 7,
        paddingX: 19.5,
        marginBottom: 10,
      }}
    >
      <Typography variant="h2" mb={10}>
        Ultimos Projetos
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        spacing={2.5}
      >
        {projectList.map((project) => (
          <Fragment key={project.id}>
            <ProjectCard project={project} />
          </Fragment>
        ))}
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        <ArrowCircleLeft
          fontSize="large"
          sx={{
            color: "#F59E0B",
          }}
        />
        <ArrowCircleRight
          fontSize="large"
          sx={{
            color: "#F59E0B",
          }}
        />
      </Stack>
    </Container>
  );
}
