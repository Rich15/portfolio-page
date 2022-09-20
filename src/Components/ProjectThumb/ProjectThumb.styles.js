import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    box-shadow: 0 0 10px hsl(200, 10%, 5%);
    border: 1px solid hsla(200, 10%, 5%, 0.6);
    border-radius: 12px;
    
    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      transition: 0.8s;

      :hover, :focus, :active {
        transform: scale(1.05, 1.05);
        box-shadow: 0 0 10px hsl(200, 15%, 25%);
      }
    }
  }

  h2 {
    font-size: 1.1rem;
    text-overflow: ellipsis;
    margin: 7px auto;

    :hover {
      text-overflow: initial;
    }
  }
`;
