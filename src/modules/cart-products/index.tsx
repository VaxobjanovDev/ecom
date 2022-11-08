import {CartProductsBox, ProductWrapper} from "./cart-products.styles";
import {CardLaid} from "../../components/card-laid";
import {useAppSelector} from "../../../utils/redux";
import {CardType} from "../../types/cardType";

export const CartProducts = ()=>{

  const {cartProducts} = useAppSelector(state => state.productReducer)

  return(
    <CartProductsBox>
      <h1>Your products:</h1>
      <ProductWrapper>
        {cartProducts.map((card:CardType)=>{
          return(
            <CardLaid key={card.id} cardInfo={card}/>
          )
        })}
      </ProductWrapper>
    </CartProductsBox>
  )
}
