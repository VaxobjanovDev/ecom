
import { Container } from "../../layout/container";
import { AlertBox, Count, LogoBox, NavigationWrapper, UserBox } from "./navigation.styles";
import { Button } from "../button";
import { NotificationIcon, UserIcon } from "../icons";

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <Container className={"container-fluid d-flex justify-content-between px-0"}>
          <LogoBox src={'/assets/logo.png'} alt={"Logo_Company"} />
        <UserBox>
          <AlertBox>
            <NotificationIcon fill={"#BBC2D0"} width={25} height={25} />
            <Count>1</Count>
          </AlertBox>
          <Button>
            Личный кабинет
            <UserIcon fill={"#fff"} width={32} height={32} />
          </Button>
        </UserBox>
      </Container>
    </NavigationWrapper>
  )
}
