import { CountProduct, Input, InputBox, MainBox, Title } from "./main.styles";
import { Cards } from "../cards";
import { Button } from "../../components/button";
import { SearchIcon } from "../../components/icons";
import { Container } from "../../layout/container";
import { DataType } from "../../types/cardType";
import { Route } from "../detail/detail.styles";

export const MainComponent = ({ data }: DataType) => {
  return (
    <MainBox>
      <Container className={"container-fluid"}>
        <Route>Заявки &#62; Оформить заказ</Route>
        <Title>Оформить заказ</Title>
        <InputBox>
          <Input />
          <Button>
            <SearchIcon />
          </Button>
        </InputBox>
        <CountProduct>Все товары ({data.length})</CountProduct>
      </Container>
      <Cards data={data} />
    </MainBox>
  )
}