import React from "react";
import { Link } from "react-router-dom";
// Styles
import {
  Wrapper,
  Content,
  LinksContainer,
  SocialsContainer,
} from "./Footer.styles";
// Images
import LogoImg from "../../../images/logo-footer.svg";
import TwitterImg from "../../../images/twitter.png";
import EmailImg from "../../../images/email.png";
import GithubImg from "../../../images/github.png";

const Footer = () => (
  <Wrapper>
    <Content>
      <LinksContainer>
        <img
          src={LogoImg}
          alt="A logo that reads 'Ricardo Osio' in white letters"
          width="90"
          height="16"
        />
        <ul>
          <li>
            <Link to="/" title="Home">Home</Link>
          </li>
          <li>
            <Link to="/projects" title="Projects">Projects</Link>
          </li>
          <li>
            <Link to="/about" title="About Me">About Me</Link>
          </li>
        </ul>
      </LinksContainer>
      <div id="divider"></div>
      <h3>Contact Me!</h3>
      <SocialsContainer>
        <a href="https://twitter.com/rich_osio" title="Hit me up on Twitter!">
          <img
            src={TwitterImg}
            alt="Twitter Logo (Link to my Twitter)"
            width="100"
            height="100"
          />
        </a>
        <a href="mailto:rdog1510@gmail.com" title="Write me an email">
          <img
            src={EmailImg}
            alt="Letter icon (Link to my email)"
            width="100"
            height="100"
          />
        </a>
        <a
          href="https://github.com/Rich15"
          title="Check out my public repos on Github!">
          <img
            src={GithubImg}
            alt="Github Logo (Link to my Github)"
            width="100"
            height="100"
          />
        </a>
      </SocialsContainer>
      <span id="icons-disclaimer">
        Icons from <a href="https://iconos8.es/">icons8</a>
      </span>
      <span>&copy;2022 Ricardo Osio</span>
    </Content>
  </Wrapper>
);

export default Footer;
