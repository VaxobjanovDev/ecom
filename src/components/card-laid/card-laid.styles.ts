import styled from "styled-components";

export const CardLaidBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.1);
  margin: 16px 0;
  
  &>button{
    padding: 5px 8px;
    border-radius: 5px;
    margin-top:80px;
  }
`

export const CardImage = styled.img`
  width: 300px;
  height: 200px;
`

export const CardInfo = styled.div`
  padding: 10px 0;
  
  h2{
    margin: 20px 0;
  }
  
  p{
    font-size: 18px;
    line-height: 19px;
    font-weight: 600;
    color: grey;
  }
`
