import styled from "styled-components";

interface Active {
  active?: boolean
  disabled?: boolean
  background?: string
}

export const ButtonStyles = styled.button<Active>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  background: ${props => props.background};
  ${({active}) => {
    if (active) {
      return `
      background:#00C48C;
      color:#fff; 
    `;
    }
  }}

  ${({disabled}) => {
    if (disabled) {
      return `
        pointer-events:none;
        &>svg{
          fill:grey!important;
        }
      `
    }
  }
  }
`