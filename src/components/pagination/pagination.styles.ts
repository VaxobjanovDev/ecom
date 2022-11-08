import styled from "styled-components";

export const PaginationContainer =styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
`

export const ButtonNavigation = styled.div`
display: flex;
  
  &>button{
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    padding: 9px 13px;
    margin: 5px;
    border-radius: 5px;
  }

  &>button:hover{
    background: #00C48C;
  }
`