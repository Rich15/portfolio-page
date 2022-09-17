import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, Image, Description } from "./AboutPreview.styles";
// Images
import MyselfImgDesktop from "../../../images/myself-desktop.png";

const AboutPreview = () => (
  <Wrapper>
    <Content>
      <h2>This is Me</h2>
      <div id="info-container">
        <Image
          src={MyselfImgDesktop}
          alt="A photo of myself holding my High School degree and a
          recognition for being 2nd in my Promotion. I'm wearing a graduation
          hat, a beige shirt, a stole and a distinction medal."
          width="200"
          height="180"
        />
        <Description id="description">
          <p>
            I'm a Web Developer based on Venezuela who loves to build useful and
            beautiful websites. My favorite hobbies are reading, listening to
            music, working out and learning new things.{" "}
            <Link to="/about"> Find out more about me here.</Link>
          </p>
        </Description>
      </div>
    </Content>
  </Wrapper>
);

export default AboutPreview;
