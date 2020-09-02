import * as React from 'react';
import classNames from 'classnames';
import "./NavBar.scss";
import { ReactNode, DOMAttributes } from 'react';

export enum NavBarColor {
    Primary,
    Secondary
}

export enum NavBarType {
    Horizontal
}

export interface NavBarProps {
    id?: string,
    className?: string,
    color?: NavBarColor,
    type?: NavBarType,
    children?: ReactNode
}

const NavBar: React.FunctionComponent<NavBarProps & DOMAttributes<Element>> = ({ id, className, color = NavBarColor.Primary, type = NavBarType.Horizontal, children}) => {

    const navbarClassnames: string = classNames(
        className,
        "lobster-component",
        "navbar-component", {
            "primary-navbar": color === NavBarColor.Primary,
            "secondary-navbar": color === NavBarColor.Secondary,
            "horizontal-navbar": type === NavBarType.Horizontal
        }
    );

    return (
        <div id={id} className={navbarClassnames}>
            {children}
        </div>
    );
}

export default NavBar;