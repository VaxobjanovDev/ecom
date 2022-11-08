import {Box, ButtonCart, DetailWrapper, FirstBox, RightBox, SecondBox, StockBox, SubHeaderDec} from "./detail.styles";
import { Container } from "../../layout/container";
import { DetailBox, DetailTitle, Route } from './detail.styles'
import SliderCard from "../../components/slider";
import { Button } from "../../components/button";
import { BagIcon, ChevronRight } from "../../components/icons";
import { Stock } from "../../components/stock";
import {CardType, PropsCard} from "../../types/cardType";
import { ButtonsComponent } from "./buttons";
import {userSlice} from "../../store/reducer";
import {useAppDispatch} from "../../../utils/redux";
import Link from "next/link";


export const ProductDetail = ({ cardInfo }: PropsCard) => {

  const dispatch = useAppDispatch()
  const {todoAdd} = userSlice.actions

  const handleAddClick = (cardInfo:CardType) =>{
    dispatch(todoAdd(cardInfo))
  }

  return (
    <DetailWrapper>
      <Container className={"container-fluid"}>
        <Route>Заявки &#62; Оформить заказ &#62; Something</Route>
        <DetailBox>
          <DetailTitle>
            {cardInfo.title}
          </DetailTitle>
          <Container className={"row justify-content-center my-5"}>
            <Container className={"col-xl-6"}>
              <SliderCard sliderImg={cardInfo.imgLink} />
            </Container>
            <Container className={"col-xl-6"}>
              <RightBox>
                <SubHeaderDec>
                  Цена телефона
                </SubHeaderDec>
                <h3>{cardInfo.price} сум </h3>
                <FirstBox>
                  <SubHeaderDec>
                    Общая цена (с наценкой)
                  </SubHeaderDec>
                  <Box>
                    <h3>{cardInfo.installmentPrice} сум</h3>
                    <SubHeaderDec><span>{cardInfo.dividePrice} сум</span>x3</SubHeaderDec>
                  </Box>
                  <ButtonsComponent />
                  <p>Наценка: <span>5%</span></p>
                </FirstBox>
                <SecondBox>
                  <SubHeaderDec>
                    Общие характеристики
                  </SubHeaderDec>
                    <p>Тип: <span>{cardInfo.tip}</span></p>
                    <p> Стандарт: <span>{cardInfo.internet}</span></p>
                    <p>Операционная система: <span>{cardInfo.system}</span></p>
                  <Button>
                    Показать все
                    <ChevronRight width={15} height={15} />
                  </Button>
                </SecondBox>
              </RightBox>
            </Container>
          </Container>
          <Container>
            <StockBox>
              <Stock stock={cardInfo.stock} />
              <Button type={"Add"} handleClick={handleAddClick} cardInfo={cardInfo}>Добавить в корзину</Button>
            </StockBox>
          </Container>
         <Link href={"/products"}>
           <ButtonCart>
             <BagIcon fill="#fff" />
           </ButtonCart>
         </Link>
        </DetailBox>
      </Container>
    </DetailWrapper>
  )
}

