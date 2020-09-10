import * as React from 'react';
import classNames from 'classnames';
import Button, { ButtonColor } from '../../Button/Button';
import "./NavBarMenu.scss";
import Icon from '../../Icon/Icon';
import { DOMAttributes } from 'react';

export interface NavbBarMenuProps {
    id?: string,
    className?: string,
    options: Array<string>,
    color?: ButtonColor
}

const NavbBarMenu: React.FunctionComponent<NavbBarMenuProps & DOMAttributes<Element>> = ({ id, className, options, color = "white", ...domAttributes }) => {

    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const wrapperClassnames: string = classNames(
        "lobster-component",
        "navbarmenu-component",
        className
    );

    const containerClassnames: string = classNames(
        "menu-component", {
        "menu-component-opened": isMenuOpen
    }
    );

    const onMenuIconClick = (event: React.MouseEvent<SVGSVGElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className={wrapperClassnames} {...domAttributes}>
            <Icon icon="bars" className="menu-icon" onClick={onMenuIconClick} />
            <div className={containerClassnames} id={id}>
                {options.map((option: string, index: number) => <Button key={index} label={option} type={"simple"} color={color} />)}
            </div>
        </div>
    );
}

export default NavbBarMenu;
