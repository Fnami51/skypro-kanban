import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`

export const Content = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`

export const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Status = styled.div`
margin-bottom: 11px;
`

export const StatusTitle = styled.p`
margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const StatusThemeBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`
export const StatusInput = styled.input`
&:checked+label{
  background: #94A6BE;
  color: #FFFFFF;
}
`

export const StatusTheme = styled.label`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  background: #FFFFFF;
  color: #94A6BE;

  &:checked+label{
  background: #94A6BE;
  color: #FFFFFF;
  }

  &:hover{
  background: #94A6BE;
  color: #FFFFFF;
  }
`

export const StatusThemeConst = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  background: #94A6BE;
  color: #FFFFFF;
`

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`

export const FormTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const Textarea = styled.textarea`
max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder{
    font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
  }
`

//Buttons
export const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
  height: 30px;
  margin-top: 8px;
  margin-bottom: 10px;
  padding: 0 14px;
`

export const ButtonGroup = styled.div`
display: flex;
gap: 8px;
`

export const Button = styled.button`
height: 30px;
padding: 10px 14px 10px 14px;
gap: 8px;
border-radius: 4px ;
border: 0.7px 0px 0px 0px;
opacity: 0px;
font-size: 14px;
font-weight: 500;
line-height: 10px;
letter-spacing: -0.01em;
text-align: center;
`

export const ButtonBG = styled(Button)`
  border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;

  &:hover{
    background-color: #33399b;
  }
`

export const ButtonBOR = styled(Button)`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF;

  &:hover{
    background-color: #33399b;
    color: #FFFFFF;
  }
`