import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 90%));
  grid-template-rows: repeat(auto, minmax(11rem, 11.25rem));
  grid-gap: 1.2rem;
  justify-content: center;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, minmax(300px, 90%));
  }
`;
