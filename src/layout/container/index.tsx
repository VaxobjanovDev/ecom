import React from "react";
import {ContainerWrapper} from "./container.styles";

interface ContainerProps {
  readonly children: React.ReactNode,
  readonly className?: "container"| string
}

export const Container = ({children, className="container"}: ContainerProps) => {
  return (
    <ContainerWrapper className={className}>
      {children}
    </ContainerWrapper>
  )
}