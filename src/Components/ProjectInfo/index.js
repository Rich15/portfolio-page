import React from "react";
// Styles
import {
  Wrapper,
  Content,
  Image,
  Links,
  Title,
  Text,
} from "./ProjectInfo.styles";

const ProjectInfo = ({ image, repo, liveSite, name, description }) => (
  <Wrapper>
    <Content>
      <Image src={image} alt={`${name} screenshot`} />
      <Title>{name}</Title>
      <Links>
        <a href={liveSite} target="_blank">
          Live Site
        </a>
        <a href={repo} target="_blank">
          Repository
        </a>
      </Links>
      <Text>{description}</Text>
    </Content>
  </Wrapper>
);

export default ProjectInfo;
