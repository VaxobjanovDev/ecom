import {useState} from "react";
import {Container} from "../../layout/container";
import {NavList, SidebarWrapper} from "./sidebar.styles";
import {NavLink} from "./nav-link";
import {BagIcon, CartIcon, MainIcon, OrderIcon, RateIcon} from "../icons";

export const Sidebar = () => {

  const [active, setActive] = useState(5)

  const dataLink = [
    {id: 1, path: "/", pathTitle: "Главная", icon: <MainIcon/>},
    {id: 2, path: "/", pathTitle: "Заказы", icon: <OrderIcon/>},
    {id: 3, path: "/products", pathTitle: "Товары", icon: <BagIcon/>},
    {id: 4, path: "/", pathTitle: "Отзывы", icon: <RateIcon/>},
    {id: 5, path: "/", pathTitle: "Оформить заказ", icon: <CartIcon/>},

  ]

  const handleClick = (id: number) => {
    setActive(id)
  }

  return (
    <SidebarWrapper>
      <Container className={"container p-0"}>
        <NavList>
          {dataLink.map((linkItem) => (
            <NavLink
              active={active === linkItem.id}
              handleClick={() => handleClick(linkItem.id)}
              key={linkItem.id}
              path={linkItem.path}
              pathTitle={linkItem.pathTitle}
              icon={linkItem.icon}/>
          ))}
        </NavList>
      </Container>
    </SidebarWrapper>
  )
}