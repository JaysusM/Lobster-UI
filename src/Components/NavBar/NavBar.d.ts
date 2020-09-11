import * as React from 'react';
import "./NavBar.scss";
import { ReactNode, DOMAttributes } from 'react';
export declare type NavBarColor = "primary" | "secondary";
export declare type NavBarType = "horizontal";
export interface NavBarProps {
    id?: string;
    className?: string;
    color?: NavBarColor;
    type?: NavBarType;
    children?: ReactNode;
}
declare const NavBar: React.FunctionComponent<NavBarProps & DOMAttributes<Element>>;
export default NavBar;
