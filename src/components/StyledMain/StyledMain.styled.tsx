import styled from "styled-components";

export const Wrap = styled.main`
  height: 100vh;
  width: 800px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-sizing: border-box;
  padding: 16px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
