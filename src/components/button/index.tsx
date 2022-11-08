import React from "react";
import {ButtonStyles} from "./button.styles";
import {CardType} from "../../types/cardType";

interface ButtonProps {
  readonly children: React.ReactNode
  readonly active?: boolean
  readonly background?: string;
  readonly type?: "Add" | "Remove";
  handleClick?: any;
  disabled?: boolean
  cardInfo?: CardType
}

export const Button = ({
                         children, active, handleClick,type, cardInfo, disabled,
                         background = "transparent"
                       }: ButtonProps) => {

  const twoFunc = () => {
    if (type === "Add") {
      handleClick(cardInfo);
    } else {
      handleClick(cardInfo?.id)
    }
  }

  return (
    <ButtonStyles
      background={background}
      disabled={disabled}
      onClick={twoFunc}
      active={active}
    >
      {children}
    </ButtonStyles>
  )
}