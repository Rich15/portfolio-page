import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, ProjectPreview } from "./ProjectsPreview.styles";
// Images
import AdviceGenImgMobile from "../../../images/captura-ineedadvices-mobile.jpeg";
import AdviceGenImgDesktop from "../../../images/captura-ineedadvices-desktop.jpeg";

const ProjectsPreview = () => (
  <Wrapper>
    <Content id="projects-preview">
      <h2>Here's some of my Work</h2>
      <ProjectPreview>
        <div id="advice-generator" className="img-container"></div>
        <div className="text-container">
          <h3>Advice Generator</h3>
          <p>
            A Frontend Mentor challenge, this page generates random advices with
            the help of the Advice Slip API. Click for more info!
          </p>
        </div>
      </ProjectPreview>
      <ProjectPreview className="img-right">
        <div id="inventory-app" className="img-container"></div>
        <div className="text-container">
          <h3>Local Inventory App</h3>
          <p>
            Created for a small business, this Website built with ReactJS keeps
            track of various products and sales on a local inventory. Click for
            more info!
          </p>
        </div>
      </ProjectPreview>
      <ProjectPreview>
        <div id="movies-db" className="img-container"></div>
        <div className="text-container">
          <h3>Movies DB Site</h3>
          <p>
            Built with ReactJS, this WebApp lists information from thousands of
            movies from The Movie DataBase. Click for more info!
          </p>
        </div>
      </ProjectPreview>
      <Link to="/projects" id="more" title="More Projects">
        More projects -&gt;
      </Link>
    </Content>
  </Wrapper>
);

export default ProjectsPreview;
