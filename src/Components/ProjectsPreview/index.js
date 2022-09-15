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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices velit sit amet venenatis pretium. Praesent mollis, enim
            eget vulputate ornare, urna nisi sodales sapien, vel tristique urna
            elit sed magna.
          </p>
        </div>
      </ProjectPreview>
      <ProjectPreview className="img-right">
        <div id="inventory-app" className="img-container"></div>
        <div className="text-container">
          <h3>Local Inventory App</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices velit sit amet venenatis pretium. Praesent mollis, enim
            eget vulputate ornare, urna nisi sodales sapien, vel tristique urna
            elit sed magna. Nunc ligula tellus, tempus ut dignissim at, ornare
            quis lectus.
          </p>
        </div>
      </ProjectPreview>
      <ProjectPreview>
        <div id="movies-db" className="img-container"></div>
        <div className="text-container">
          <h3>Movies DB Site</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices velit sit amet venenatis pretium. Praesent mollis, enim
            eget vulputate ornare, urna nisi sodales sapien, vel tristique urna
            elit sed magna. Nunc ligula tellus.
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
