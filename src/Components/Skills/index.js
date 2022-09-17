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
        <Skill title="Website Building">
          <img
            src={WebsiteImg}
            alt="Animated website icon"
            width="100"
            height="100"
          />
          <h3>Website Building</h3>
        </Skill>
        <Skill title="Communicating">
          <img
            src={CommunicationImg}
            alt="Two text bubbles icon"
            width="100"
            height="100"
          />
          <h3>Communicating</h3>
        </Skill>
        <Skill title="Accessibility">
          <img
            src={AccessibilityImg}
            alt="Accessibility icon"
            width="100"
            height="100"
          />
          <h3>Accessibility</h3>
        </Skill>
      </SkillsContainer>
    </Content>
  </Wrapper>
);

export default Skills;
