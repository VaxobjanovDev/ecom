import { Button } from "../button";
import { Checkbox, StockDesc, StockDetail, StockInfo, StockTitle, StockTitles } from "./stock.styles";
import { StockProps } from "../../types/cardType";
import { RecycleIcon,Discount, GiftIcon } from "../icons";

export const Stock = ({ stock }: StockProps) => {

  return (
    <>
      {stock.recycleTitle && (
        <StockDetail>
          <StockInfo>
            <Button background={"#F39DBD"}>
              <RecycleIcon width={25} height={25} />
            </Button>
            <StockTitles>
              <StockTitle>{stock.recycleTitle}</StockTitle>
              {stock.stockIphone && <StockTitle>IMEI 012345678901234</StockTitle>}
              <StockDesc>{stock.discount} сум</StockDesc>
            </StockTitles>
          </StockInfo>
          <Checkbox type="checkbox" />
        </StockDetail>
      )}
      {stock.giftTitle && (
        <StockDetail>
          <StockInfo>
            <Button background="#A2AEDB">
              <GiftIcon width={25} height={25} />
            </Button>
            <StockTitles>
              <StockTitle>{stock.giftTitle}</StockTitle>
              {stock.stockIphone && <StockTitle>IMEI 012345678901234</StockTitle>}
              <StockDesc>{stock.gift}</StockDesc>
            </StockTitles>
          </StockInfo>
          <Checkbox type="checkbox" />
        </StockDetail>)
      }
      {stock.phoneStockTitle && (
        <StockDetail>
          <StockInfo>
            <Button background="#FFBD95">
              <Discount width={25} height={25} fill={"#FF6422"} />
            </Button>
            <StockTitles>
              <StockTitle>{stock.phoneStockTitle}</StockTitle>
              {stock.stockIphone && <StockTitle>IMEI 012345678901234</StockTitle>}
              <StockDesc>{stock.stock}</StockDesc>
            </StockTitles>
          </StockInfo>
          <Checkbox type="checkbox" />
        </StockDetail>
      )}
      {stock.stockIphone && (
        <StockDetail>
          <StockInfo>
            <Button background="#AAD9AC">
              <Discount width={25} height={25} fill={"#4CAF50"} />
            </Button>
            <StockTitles>
              <StockTitle>{stock.stockIphoneTitle}</StockTitle>
              {stock.stockIphone && <StockTitle>IMEI 012345678901234</StockTitle>}
              <StockDesc>{stock.stockIphone}</StockDesc>
            </StockTitles>
          </StockInfo>
          <Checkbox type="checkbox" />
        </StockDetail>
      )}
    </>
  )
}