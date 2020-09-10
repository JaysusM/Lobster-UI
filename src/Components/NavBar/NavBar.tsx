import * as React from 'react';
import classNames from 'classnames';
import "./NavBar.scss";
import { ReactNode, DOMAttributes } from 'react';

export type NavBarColor =
    "primary" |
    "secondary";

export type NavBarType =
    "horizontal";

export interface NavBarProps {
    id?: string,
    className?: string,
    color?: NavBarColor,
    type?: NavBarType,
    children?: ReactNode
}

const NavBar: React.FunctionComponent<NavBarProps & DOMAttributes<Element>> = ({ id, className, color = "primary", type = "horizontal", children, ...domAttributes}) => {

    const navbarClassnames: string = classNames(
        className,
        "lobster-component",
        "navbar-component", {
            "primary-navbar": color === "primary",
            "secondary-navbar": color === "secondary",
            "horizontal-navbar": type === "horizontal"
        }
    );

    return (
        <div id={id} className={navbarClassnames} {...domAttributes}>
            {children}
        </div>
    );
}

export default NavBar;