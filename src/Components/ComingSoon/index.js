import React from "react";
// Styles
import { Wrapper, Content, Image, Text } from "./ComingSoon.styles";
// Images
import ComingSoonImg from "../../../images/coming-soon.png";

const ComingSoon = () => (
  <Wrapper>
    <Content>
      <Image src={ComingSoonImg} alt="A ticking clock icon" />
      <Text>More projects coming soon...</Text>
    </Content>
  </Wrapper>
);

export default ComingSoon;
