import { GitHub, Language } from "@mui/icons-material";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Project } from "~/models";

export interface ProjectProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectProps) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="h5" fontWeight="bold">
        {project.title}
      </Typography>
      <Box>
        {project.tagList.map((tag) => (
          <Fragment key={tag.name}>
            <Chip
              label={tag.name}
              variant="filled"
              sx={{
                backgroundColor: tag.color,
                color: tag.name !== "Javascript" ? "white" : "black",
                marginRight: "10px",
                marginTop: "5px",
              }}
            />
          </Fragment>
        ))}
      </Box>
      <Box>
        <Image
          src={project.imageUrl}
          width={300}
          height={285}
          alt={project.title}
          style={{
            borderRadius: "18px",
          }}
          // layout="responsive"
        />
      </Box>
      <Stack direction="row" spacing={1}>
        <Link href={project.githubUrl} passHref>
          <a>
            <GitHub />
            <Typography
              sx={{
                display: "inline-block",
              }}
            >
              GitHub
            </Typography>
          </a>
        </Link>
        <Link href={project.deployUrl} passHref>
          <a target="_blank">
            <Language />
            <Typography
              sx={{
                display: "inline-block",
              }}
            >
              Deploy
            </Typography>
          </a>
        </Link>
      </Stack>
    </Stack>
  );
}
