import styled from "styled-components";

export const Background = styled.main`
  width: 100%;
  background-color: #EAEEF6;
`;

export const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
  }
`;