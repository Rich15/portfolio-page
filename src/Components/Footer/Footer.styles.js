import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0.8),
    hsla(180, 60%, 5%, 0.8)
  );
  padding: 20px;
  align-items: center;
  color: white;

  #divider {
    width: 95%;
    height: 3px;
    background-color: white;
    margin: 10px auto;
  }

  h3 {
    color: white;
    margin: 7px auto;
    font-weight: 800;
  }

  #icons-disclaimer {
    margin-top: 7px;

    a {
      color: white;
      text-decoration: underline;
      transition: 0.8s;

      :hover,
      :focus,
      :active {
        text-shadow: 0 0 10px hsl(120, 50%, 90%);
      }
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  img {
    width: 30%;
    height: auto;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
      width: 20%;
      margin-right: 50px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: left;
      flex-direction: row;
      font-size: 1.3rem;

      a {
        margin: auto 7px;
      }
    }

    a {
      text-decoration: none;
      color: white;
      transition: 0.8s;

      :hover {
        text-shadow: 0 0 10px hsl(200, 30%, 95%);
      }
    }

    li {
      margin: 5px auto;
    }
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  a {
    transition: 0.7s;

    :hover,
    :focus,
    :active {
      filter: drop-shadow(0 0 10px hsl(0, 0%, 95%));
      outline: 1px solid transparent;
    }
  }
`;
