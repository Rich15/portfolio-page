import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px;
  width: 90%;
  align-items: center;

  @media screen and (min-width: 750px) {
    width: 85%;
  }

  h2 {
    margin-bottom: 20px;
  }

  #info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 750px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  filter: drop-shadow(0 1px 15px hsla(130, 30%, 5%, 0.7));

  @media screen and (min-width: 750px) {
    width: 50%;
    height: auto;
  }
`;

export const Description = styled.div`
  text-align: center;

  a {
    text-decoration: underline;
    color: hsl(102, 71%, 7%);
    font-weight: 700;
    transition: 0.5s;

    :hover,
    :focus,
    :active {
      text-decoration: none;
      text-shadow: 0 0 7px var(--brightGreen);
    }
  }

  @media screen and (min-width: 750px) {
    font-size: 1.3rem;
  }
`;
