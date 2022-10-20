import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 5px;
`;

export const Image = styled.img`
  width: 90%;
  height: auto;
  border-radius: 7px;
  box-shadow: var(--shadow);
  margin-bottom: 5px;

  @media screen and (min-width: 800px) {
    width: 60%;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;

  a {
    text-decoration: underline;
    color: hsl(102, 71%, 10%);
    font-weight: 700;
    transition: 0.7;

    :hover,
    :active {
      text-decoration: none;
      color: hsl(102, 71%, 15%);
      text-shadow: 0 0 7px hsla(102, 71%, 5%, 0.4);
    }

    @media screen and (min-width: 750px) {
      font-size: 1.5rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 10px auto;

  @media screen and (min-width: 750px) {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  margin: 10px 15px;

  @media screen and (min-width: 800px) {
    font-size: 1.3rem;
  }
`;
