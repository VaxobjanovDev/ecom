import Link from "next/link";
import {NavLinkStyle} from './sidebar.styles'
import {Button} from "../button";

type NavLink = {
  path: string;
  pathTitle: string;
  icon?: React.ReactNode
  active?:boolean
  handleClick?:()=>void
};

export const NavLink = ({path, pathTitle, icon,active,handleClick}: NavLink) => {

  return (
    <NavLinkStyle active={active} onClick={handleClick}>
      <Link href={path}>
        <Button>{icon}</Button>{pathTitle}
      </Link>
    </NavLinkStyle>
  );
};
