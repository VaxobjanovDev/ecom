import styled from "styled-components";

interface AddSpan {
  onClick?:()=>void
}

export const DetailWrapper = styled.div`
  display: flex;
  background: #F3F5F8;
  padding: 20px 20px 40px 20px;
  border-radius: 5px;
`

export const DetailBox = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px 15px;

  position: relative;
`

export const DetailTitle = styled.h2`
  color: #3D639D;
  margin-bottom: 30px;
`

export const RightBox = styled.div`
  padding: 10px 20px 10px 10px;
`

export const Route = styled.h5`
  margin-bottom: 30px;
`

export const SubHeaderDec = styled.p`
 font-weight: 400;
  color: #BBC2D0;
  line-height:19px;
  font-size: 16px;
  margin-bottom: 8px;
  &>span{
    border-radius: 4px;
    padding: 4px;
    background: #FF647C;
    margin-right: 5px;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #fff;
  } 
  
`

export const FirstBox = styled.div`
  margin: 40px 0;
  
  &>p:last-child{
    text-align: center;
    font-size: 16px;
    line-height: 19px;
    
    &>span{
      font-weight: 600;
    }
    
  }
`

export const SecondBox =styled.div`
  &>p{
    width: 50%;
    margin: 8px 0 21px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  
  &>button{
    color: #00C48C;
    width: 100%;
    justify-content: space-between;
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
  }
`

export const BoldInfo = styled.h3`
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 16px 0 8px 0;

  &>:first-child{
    border-radius: 10px 0 0 10px;
  }
  &>:last-child{
    border-radius: 0 10px 10px 0;
  }
  button{
    width: 100%;
    padding: 10px 30px;
    border: 1px solid #00C48C;
    border-right-width: 0.5px;
  }
`

export const StockBox =styled.div`
  &>button{
    width: 100%;
    background: #00C48C;
    padding: 15px 30px;
    border-radius: 30px;
    color: #fff;
    font-size: 16px;
    line-height: 19px;
  }
`

export const ButtonCart = styled.span<AddSpan>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #FF647C;
  top: -20px;
  right: -5px;
  position: absolute;
  border-radius: 50%;
  padding: 10px;
`

