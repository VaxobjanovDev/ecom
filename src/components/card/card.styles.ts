import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  
  position: relative;
`

export const ImageCard = styled.img`
  max-width: 100%;
  max-height:max-content;
  object-fit: cover;
`

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #F7F7F7;
`

export const CardBody = styled.div`
  
  &>h3{
    font-size: 14px;
    font-weight: 400;
    margin-top: 6px;
  }
  
  &>h4{
    font-size: 15px;
    font-weight: 500;
    margin: 6px 0;
    line-height: 18px;
  }
  
  &>p{
    color: #BBC2D0;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    span{
      border-radius: 4px;
      padding: 4px;
      background: #FF647C;
      margin-right: 5px;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.3px;
      color: #fff;
    }
  }
`

export const ButtonBox = styled.div`
  position: absolute;
  top: 20px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  &>button{
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px 0;
  }
`