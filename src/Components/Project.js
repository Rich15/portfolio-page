import React from "react";
import { useParams } from "react-router-dom";
// Components
import ProjectInfo from "./ProjectInfo";

const Project = () => {
  const { projectId } = useParams();

  const projects = require("../../projects.json").projects;
  const project = projects.find((project) => project.id == projectId);

  return (
    <ProjectInfo
      name={project.name}
      image={project.photo}
      repo={project.repo}
      liveSite={project["live-site"]}
      description={project["full-description"]}
    />
  );
};

export default Project;
