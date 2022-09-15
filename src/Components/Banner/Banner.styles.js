import styled from "styled-components";
import BannerImgMobile from "../../../images/angel-falls-mobile.jpg";
import BannerImgDesktop from "../../../images/angel-falls-desktop.jpg";
import BannerImg from "../../../images/angel-falls.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  margin: 0 auto;

  /* @media screen and (min-width: 770px) {
    height: 30vh;
  } */

  /* @media screen and (min-width: 1200px) */
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--veryLightBlue);
  text-align: center;
  background-image: linear-gradient(
      to right,
      hsla(0, 0%, 0%, 0.8),
      hsl(0, 0%, 0%, 0.4)
    ),
    url(${BannerImgMobile});
    background-repeat: no-repeat;

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    background-image: linear-gradient(
        to right,
        hsla(0, 0%, 0%, 0.8),
        hsl(0, 0%, 0%, 0.4)
      ),
      url(${BannerImgDesktop});
  }

  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(
        to right,
        hsla(0, 0%, 0%, 0.8),
        hsl(0, 0%, 0%, 0.4)
      ),
      url(${BannerImg});
  }

  h1 {
    @media screen and (min-width: 770px) {
      font-size: 2.5rem;
    }
  }
  span {
    color: hsl(103, 82%, 60%);
    animation: bounce 3s ease infinite;

    @keyframes bounce {
      0% {
        position: relative;
        bottom: 5px;
      }

      50% {
        position: relative;
        bottom: -5px;
      }

      100% {
        position: relative;
        bottom: 5px;
      }
    }
  }
`;
