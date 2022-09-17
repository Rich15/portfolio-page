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
  border-collapse: collapse;
  transition: 1s;

  :hover {
    animation: border-appear 2s forwards;
    transform: scale(1.1, 1.1);
  }

  @keyframes border-appear {
    0% {
      border-left: 4px solid var(--brightGreen);
    }

    25% {
      border-top: 4px solid var(--brightGreen);
    }

    50% {
      border-right: 4px solid var(--brightGreen);
    }

    75% {
      border-bottom: 4px solid var(--brightGreen);
    }

    100% {
      border: 4px solid var(--brightGreen);
    }
  }

  @media screen and (min-width: 700px) {
    margin: auto 13px;
  }

  img {
    width: 50%;
    height: auto;
  }
`;
