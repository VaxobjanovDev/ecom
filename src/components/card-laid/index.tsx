import {CardImage, CardLaidBox, CardInfo} from "./card-laid.styles";
import {Button} from "../button";
import {RemoveIcon} from "../icons";
import {PropsCard} from "../../types/cardType";
import {useAppDispatch} from "../../../utils/redux";
import {userSlice} from "../../store/reducer";

export const CardLaid = ({cardInfo}:PropsCard)=>{
  const dispatch = useAppDispatch()
  const {itemRemove} = userSlice.actions

  const handleRemove = (id:number)=>{
    dispatch(itemRemove(id))
  }

  return(
    <CardLaidBox>
      <CardImage src={cardInfo.imgLink}/>
      <CardInfo>
        <h2>{cardInfo.title}</h2>
        <p>{cardInfo.price} сум</p>
      </CardInfo>
        <Button type={"Remove"} handleClick={handleRemove} cardInfo={cardInfo}  background={"red"}>
          <RemoveIcon/>
        </Button>
    </CardLaidBox>
  )
}