import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Image = styled.img`
  @keyframes beat {
    0% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.1, 1.1);
    }

    100% {
      transform: scale(1, 1);
    }
  }

  animation: beat 1s infinite;
`;

export const Text = styled.h3`
  margin: 12px auto;
`;
