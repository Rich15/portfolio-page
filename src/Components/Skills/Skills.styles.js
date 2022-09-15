import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Content = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0.8),
    hsla(180, 60%, 5%, 0.8)
  );

  h2 {
    color: hsl(0, 10%, 95%);
    margin-bottom: 10px;
  }
`;

export const SkillsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px;

   @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;

   }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(175, 40%, 95%);
  border-radius: 30%;
  padding: 10px;
  margin: 10px auto;
  width: 100%;

  @media screen and (min-width: 700px) {
    margin: auto 10px;
  }

  img {
    width: 50%;
    height: auto;
  }
`;
