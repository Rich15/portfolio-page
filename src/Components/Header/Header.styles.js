import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 13vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px hsla(0, 0%, 70%, 0.9) solid;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-right: 10px;

    li {
      margin: auto 15px;
      font-size: 1rem;

      @media screen and (min-width: 700px) {
        font-size: 1.3rem;
      }
    }

    a {
      text-decoration: none;
      color: hsl(214, 60%, 5%);

      :hover {
        text-shadow: 0 0 7px hsl(172, 38%, 49%);
        position: relative;
        bottom: 1px;
        transition: 500ms;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: auto;

  :hover, :focus {
    filter: drop-shadow(0 0 10px black);
  }


  @media screen and (min-width: 1000px) {
    width: 110px;
    height: 110px;
  }
`;
