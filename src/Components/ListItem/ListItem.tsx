import "./ListItem.scss";
import * as React from 'react';
import classNames from "classnames";
import Icon, { isIconIncludedInIconLibrary, IconName } from "../Icon/Icon";
import { DOMAttributes, useState } from "react";

export interface ListItemProps {
    id?: string,
    className?: string,
    label: string,
    icon?: IconName | string,
    children?: React.ReactNode
}

const ListItem: React.FunctionComponent<ListItemProps & DOMAttributes<Element>> = ({ id, className, icon, label, children, ...domAttributes }) => {
    const [areChildrenShown, setAreChildrenShown] = useState<boolean>(false);

    const wrapperClassnames: string = classNames(
        className,
        "lobster-component",
        "listitem-component"
    );

    const containerClassnames: string = classNames(
        "listitem-container",
        {
            "listitem-component-icon": isIconIncludedInIconLibrary(icon as string),
            "listitem-component-sublist": children,
            "listitem-component-sublist-show": areChildrenShown
        }
    );

    const subitemsContainerClassnames: string = classNames(
        "listsubitems-container", {
            "listsubitems-container-show": areChildrenShown
        }
    )


    const IconComponent = (): JSX.Element | undefined => {
        return <>
            {icon && isIconIncludedInIconLibrary(icon as string) && <Icon icon={icon} className="listitem-icon" />}
        </>
    }

    const onChildrenButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setAreChildrenShown(!areChildrenShown);
    }

    const ChildrenButtonComponent = (): JSX.Element | undefined => {
        return <>
            {children && <Icon icon="chevron-down" className="childrenbutton-component" />}
        </>
    }

    return (
        <div id={id} className={wrapperClassnames} {...domAttributes}>
            <div className={containerClassnames} onClick={(children) ? onChildrenButtonClick : undefined}>
                {IconComponent()}
                <a className="listitem-label">{label}</a>
                {ChildrenButtonComponent()}
            </div>
            {children && <div className={subitemsContainerClassnames}>
                {children}
            </div>}
        </div>
    );
}

export default ListItem;
