import styled from "styled-components";

export const Background = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const ThemeBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const InputRadio = styled.input`
&:checked+label{
  opacity: 1 !important;
}
`

export const Theme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;

  &:hover{
    opacity: 1 !important;
  }

  &:checked{
    opacity: 1 !important;
  }
`;


// Calendar

export const CalendarBox = styled.div`
    max-width: 168px;
    width: 100%;
`
