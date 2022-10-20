import React, { useState } from "react";
import { v4 } from "uuid";
// Components
import Grid from "./Grid";
import ProjectThumb from "./ProjectThumb";
import ComingSoon from "./ComingSoon";

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
            id={project.id}
          />
        ))}
      </Grid>
      <ComingSoon />
    </>
  );
};

export default Projects;
