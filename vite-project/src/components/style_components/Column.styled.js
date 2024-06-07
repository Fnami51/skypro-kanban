import styled from "styled-components";

export const Column = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`;

export const Title = styled.p`
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const TitleFrames = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

export const Cards = styled.div`
  width: 220px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    flex-direction: row;
    align-content: flex-start;
  }
`;