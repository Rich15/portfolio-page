import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Content } from "./ProjectThumb.styles";

const ProjectThumb = ({ image, link, name }) => (
  <Content>
    <a href={link}>
      <img
        src={image}
        width="300"
        height="200"
        alt={`${name} web screenshot`}
        title={name}
      />
    </a>
    <h2>{name}</h2>
  </Content>
);

export default ProjectThumb;
