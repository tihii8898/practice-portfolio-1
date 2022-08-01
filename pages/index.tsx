import { Box } from "@mui/material";
import { Hero, ProjectList } from "~/components/home";
import { MainLayout } from "~/components/layout";
import { NextPageWithLayout } from "~/models";

const Home: NextPageWithLayout = () => {
  return (
    <Box component="section">
      <Hero />
      <ProjectList />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
