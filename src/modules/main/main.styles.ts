import styled from "styled-components";

export const MainBox = styled.div`
  background: #F3F5F8;
  padding: 20px 10px;
  border-radius: 5px;
`

export const Title = styled.h2`
  margin: 0 0 20px 0;
`

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &>button{
    top: 0;
    right: 0;
    position: absolute;
    background: #00C48C;
    padding: 13px 20px;   
    border-radius: 0 26px 26px 0;
  }
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  height: 50px;
  border: none;
  border-radius: 26px;
  padding: 16px 20px;
`
export const CountProduct = styled.h4`
  margin: 30px 0 20px 0;
`