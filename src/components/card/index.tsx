import { ButtonBox, CardBody, CardBox, CardImage, ImageCard } from "./card.styles";
import { Button } from "../button";
import { Discount, GiftIcon, RecycleIcon } from "../icons";
import { PropsCard } from "../../types/cardType";

export const Card = ({ cardInfo }: PropsCard) => {

  let title = cardInfo.title.substring(0, 18) + "..."

  return (
    <CardBox>
      <CardImage>
        <ImageCard src={cardInfo.imgLink} alt={"Card_Image"} />
      </CardImage>
      <CardBody>
        <h3>{title}</h3>
        <h4>{cardInfo.price} сум</h4>
        <p><span>от {cardInfo.dividePrice} сум</span>x24</p>
      </CardBody>
      <ButtonBox>
        {cardInfo.stock.recycleTitle && (
          <Button background={"#F39DBD"}><RecycleIcon /></Button>
        )}
        {cardInfo.stock.giftTitle && (
          <Button background={"#A2AEDB"}><GiftIcon /></Button>)}
        {cardInfo.stock.phoneStockTitle && (
          <Button background={"#FFBD95"}><Discount fill={"#FF6422"} /></Button>)}
        {cardInfo.stock.stockIphoneTitle && (
          <Button background={"#AAD9AC"}><Discount fill={"#4CAF50"} /></Button>)}
      </ButtonBox>
    </CardBox>
  )
}