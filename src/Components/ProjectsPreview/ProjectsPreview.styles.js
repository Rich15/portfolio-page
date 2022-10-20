import styled from "styled-components";
// Images
import AdviceGenImgMobile from "../../../images/captura-ineedadvices-mobile.jpeg";
import AdviceGenImgDesktop from "../../../images/captura-ineedadvices-desktop.jpeg";
import InventoryImgMobile from "../../../images/captura-mybiz-mobile.jpeg";
import InventoryImgDesktop from "../../../images/captura-mybiz-desktop.jpeg";
import MoviesDBImgMobile from "../../../images/captura-viewmoviesdb-mobile.jpeg";
import MoviesDBImgDesktop from "../../../images/captura-viewmoviesdb-desktop.jpeg";
import NoImg from "../../../images/no-image.png";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 7px;

  h2 {
    color: hsl(0, 50%, 5%);
    margin: 18px auto;
  }

  .img-right {
    display: flex;
    flex-direction: row-reverse;
  }

  #more {
    margin: 20px 0;
    text-decoration: none;
    text-align: center;
    color: hsl(0, 0%, 95%);
    border-radius: 7px;
    padding: 5px 10px;
    font-weight: 700;
    font-size: 1.1rem;
    background-color: hsl(104, 80%, 20%);
    transition: 0.4s;
    text-transform: uppercase;
    letter-spacing: 1.2px;

    :hover,
    :focus {
      text-shadow: 0 0 20px var(--brightGreen);
      text-decoration: none;
      color: hsl(104, 80%, 100%);
      outline: 2px solid transparent;
      box-shadow: 0 0 10px hsl(0, 0%, 10%);
      background-color: hsl(104, 80%, 40%);
      text-align: 1s;
    }
  }

  .project {
    text-decoration: none;
    color: black;
    width: 97%;
  }
`;

export const ProjectPreview = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  border: 1px solid hsla(180, 5%, 17%, 0.5);
  margin: 15px auto;
  border-radius: 7px;
  transition: 1.2s;
  box-shadow: 0 1px 10px #0a0a0a;

  :hover {
    transform: scale(1, 1.1);
    cursor: pointer;
    box-shadow: var(--shadow);
  }

  .img-container {
    width: 50%;
    overflow: hidden;
    background-image: linear-gradient(hsl(0, 0%, 0%, 0.2), hsl(0, 0%, 0%, 0.8)),
      url(${NoImg});
    background-position: center;
    background-size: contain;
  }

  #advice-generator {
    background-image: linear-gradient(hsl(0, 0%, 0%, 0.2), hsl(0, 0%, 0%, 0.8)),
      url(${AdviceGenImgMobile});
    background-position: center;
    background-size: cover;

    @media screen and (min-width: 500px) {
      background-image: linear-gradient(
          hsl(0, 0%, 0%, 0.2),
          hsl(0, 0%, 0%, 0.8)
        ),
        url(${AdviceGenImgDesktop});
      background-position: center;
      background-size: cover;
    }
  }

  #inventory-app {
    background-image: linear-gradient(hsl(0, 0%, 0%, 0.2), hsl(0, 0%, 0%, 0.8)),
      url(${InventoryImgMobile});
    background-position: center;
    background-size: cover;

    @media screen and (min-width: 500px) {
      background-image: linear-gradient(
          hsl(0, 0%, 0%, 0.2),
          hsl(0, 0%, 0%, 0.8)
        ),
        url(${InventoryImgDesktop});
      background-position: center;
      background-size: cover;
    }
  }

  #movies-db {
    background-image: linear-gradient(hsl(0, 0%, 0%, 0.2), hsl(0, 0%, 0%, 0.8)),
      url(${MoviesDBImgMobile});
    background-position: center;
    background-size: cover;

    @media screen and (min-width: 500px) {
      background-image: linear-gradient(
          hsl(0, 0%, 0%, 0.2),
          hsl(0, 0%, 0%, 0.8)
        ),
        url(${MoviesDBImgDesktop});
      background-position: center;
      background-size: cover;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 15px;

    @media screen and (min-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  h3 {
    font-size: 1rem;

    @media screen and (min-width: 700px) {
      font-size: 1.35rem;
    }
  }

  p {
    margin: 0 auto;
    font-size: 0.7rem;
    text-align: center;

    @media screen and (min-width: 700px) {
      font-size: 1rem;
    }
  }
`;
