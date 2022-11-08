import React from "react";
import {BaseLayoutMain, BaseLayoutStyle} from "./base-layout.styles";
import {Navigation} from "../../components/navigation";
import {Sidebar} from "../../components/sidebar";
import {Container} from "../container";

interface PropsType {
  readonly children: React.ReactNode
}

export const BaseLayout = ({children}: PropsType) => {
  return (
    <BaseLayoutStyle>
      <Navigation/>
      <Container className={"container-fluid d-flex p-0"}>
        <Sidebar/>
        <BaseLayoutMain>
          {children}
        </BaseLayoutMain>
      </Container>
    </BaseLayoutStyle>
  )
}