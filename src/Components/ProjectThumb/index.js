import React from "react";
import { Link, useLocation } from "react-router-dom";
// Styles
import { Content } from "./ProjectThumb.styles";
// Spinner
import Spinner from "../Spinner";

const ProjectThumb = ({ image, link, name, id }) => {
  return (
    <Content id={id}>
      <Link to={link}>
        <Spinner />
        <img
          src={image}
          width="300"
          height="200"
          alt={`${name} web screenshot`}
          title={name}
        />
      </Link>
      <h2>{name}</h2>
    </Content>
  );
};

export default ProjectThumb;
