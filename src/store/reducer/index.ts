import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {CardType} from "../../types/cardType";


interface CartProducts {
  cartProducts: CardType[];
  cartCount:number;
  isLoading: boolean;
  error: string;
}


const initialState: CartProducts = {
  cartProducts: [],
  cartCount:0,
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    todoAdd(state, action: PayloadAction<any>) {
      state.cartProducts.push(action.payload)
      state.cartCount = state.cartCount+1
    },
    itemRemove(state, action: PayloadAction<any>) {
      console.log(state.cartProducts,action)
      state.cartProducts = state.cartProducts.filter(cartInfo => cartInfo.id !== action.payload)
    },
  }
})

export default userSlice.reducer