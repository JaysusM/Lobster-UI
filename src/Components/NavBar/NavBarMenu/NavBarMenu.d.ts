import * as React from 'react';
import { ButtonColor } from '../../Button/Button';
import "./NavBarMenu.scss";
import { DOMAttributes } from 'react';
export interface NavbBarMenuProps {
    id?: string;
    className?: string;
    options: Array<string>;
    color?: ButtonColor;
}
declare const NavbBarMenu: React.FunctionComponent<NavbBarMenuProps & DOMAttributes<Element>>;
export default NavbBarMenu;
