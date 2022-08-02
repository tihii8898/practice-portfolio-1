import { Box } from "@mui/material";
import { Experience, Hero, ProjectList } from "~/components/home";

import { MainLayout } from "~/components/layout";
import { NextPageWithLayout } from "~/models";

const Home: NextPageWithLayout = () => {
  return (
    <Box component="section">
      <Hero />
      <ProjectList />
      <Experience />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
