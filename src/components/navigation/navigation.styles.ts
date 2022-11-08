import styled from "styled-components";

export const NavigationWrapper = styled.div`
  background: transparent;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
`

export const LogoBox = styled.img`
  margin-left: 64px;  
`

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &>button{
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    height: 70px;
    border: none;
    border-bottom-left-radius:30px ;
    padding:15px 70px;
    background: #3D639D;
    
    &>svg{
      margin-left: 15px;
    }
  }
`
export const AlertBox = styled.div`
  display: flex;
  margin-right: 40px;
  
  position: relative;
`

export const Count = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 4px;
  font-size: 10px;
  background: #00C48C;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  color: #fff;
  position: absolute;
  top: -5px;
  right: -5px;
`