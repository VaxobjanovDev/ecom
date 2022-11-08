import styled from "styled-components";

interface Link {
  active?: boolean
}

export const SidebarWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  background: #3D639D;
  min-height: 100vh;
  padding: 54px 0 54px 25px;
  border-radius: 0 30px 0 0;
  
  @media (max-width: 1024px){
    width: 60px;
    padding: 54px 0;
  }
  
`

export const NavList = styled.ul`
  list-style: none;
`

export const NavLinkStyle = styled.li<Link>`
  font-size: 16px;
  line-height: 24px;
  margin: 5px 0;
  width: 100%;
  
  
  & > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    text-decoration: none;
    color: #fff;
    padding: 15px 0 15px 30px;
    border-radius: 30px 0 0 30px;


    & > button {
      margin-right: 16px;
      background: transparent;
    }

    :hover {
      color: #3D639D;
      background: #fff;
      border-radius: 30px 0 0 30px;
      transition: all ease-in 0.2s;

      &> button> svg {
        transition: all ease-in-out 0.2s;
        fill:#3D639D!important;
      }
      
    }

    ${({active}) => {
      if (active) {
        return `
      background:#fff;
      color:#3D639D;
      border-radius: 30px 0 0 30px;
      transition: all ease-in-out 0.2s;
      
      &> button> svg {
        transition: all ease-in-ot 0.2s;
        fill:#3D639D!important;
      }
    `
      }
    }}
  }


  @media (max-width: 1024px){
    & > a {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 15px;
      border-radius: 0;


      & > button {
        margin-right: 0;
      }
      
      :hover {
        border-radius: 0;
      }
    }
    
  }

`