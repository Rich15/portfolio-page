import React, { useState } from "react";
import { v4 } from "uuid";
import ComingSoon from "./ComingSoon";
// Components
import Grid from "./Grid";
import ProjectThumb from "./ProjectThumb";

const Projects = () => {
  const projects = require("../../projects.json").projects;

  return (
    <>
      <Grid>
        {projects.map((project) => (
          <ProjectThumb
            key={v4()}
            name={project.name}
            image={project.photo}
            link={project.id}
          />
        ))}
      </Grid>
      <ComingSoon />
    </>
  );
};

export default Projects;
