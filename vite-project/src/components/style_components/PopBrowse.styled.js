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


export const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
  height: 30px;
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