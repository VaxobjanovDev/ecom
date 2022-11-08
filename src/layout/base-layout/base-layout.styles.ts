import styled from "styled-components";

export const BaseLayoutMain = styled.main`
  flex: 4;
  padding: 15px 20px 60px 20px;
  max-height: 100vh;
  overflow-y: scroll;

  @media (max-width: 1024px){
    flex: 6;
  }
`

export const BaseLayoutStyle = styled.div`
  max-height:100vh;
  overflow-y: hidden;
  padding-bottom:20px;
`