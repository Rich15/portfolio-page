import React from "react";
import { Link } from "react-router-dom";
// Images
import LogoImg from "../../../images/logo.svg";
// Styles
import { Wrapper, Content, Logo } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <Logo
          src={LogoImg}
          alt="Logo with the name Ricardo Osio"
          title="Home"
        />
      </Link>
      <ul>
        <li>
          <Link to="/projects" title="Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" title="About Me">
            About Me
          </Link>
        </li>
      </ul>
    </Content>
  </Wrapper>
);

export default Header;
