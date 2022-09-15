import React from "react";
// Styles
import { Wrapper, Content, SkillsContainer, Skill } from "./Skills.styles";
// Images
import WebsiteImg from "../../../images/website.png";
import CommunicationImg from "../../../images/communication.png";
import AccessibilityImg from "../../../images/accessibility.png";

const Skills = () => (
  <Wrapper>
    <Content>
      <h2>What I do Better</h2>
      <SkillsContainer>
        <Skill>
          <img src={WebsiteImg} alt="" />
          <h3>Website Building</h3>
        </Skill>
        <Skill>
          <img src={CommunicationImg} alt="" />
          <h3>Communicating</h3>
        </Skill>
        <Skill>
          <img src={AccessibilityImg} alt="" />
          <h3>Accessibility</h3>
        </Skill>
      </SkillsContainer>
    </Content>
  </Wrapper>
);

export default Skills;
