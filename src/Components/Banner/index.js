import React from "react";
// Styles
import { Wrapper, Content } from "./Banner.styles";
// Images
import BannerImage from "../../../images/angel-falls-desktop.jpg"

const Banner = () => (
  <Wrapper>
    <Content>
      <h1>Hi, I'm <span>Ricardo Osio</span></h1>
      <h2><strong>Frontend Web Developer</strong></h2>
    </Content>
  </Wrapper>
);

export default Banner;
