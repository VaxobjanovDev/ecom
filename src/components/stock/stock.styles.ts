import styled from "styled-components";

export const StockDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #BBC2D0;
  padding: 20px 10px;
`

export const StockInfo = styled.div`
  display: flex;
  align-items: flex-start;
  
  &>button{
    border-radius: 5px;
    padding: 6px 10px;
    margin-right: 20px;
  }
`

export const StockTitles= styled.div``

export const StockButton = styled.div``

export const StockTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`

export const StockDesc = styled.p`
  color: #BBC2D0;
`

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
  accent-color: #00C48C;


&:checked{
    background-color:#00C48C;
    color: #fff;
  }
`