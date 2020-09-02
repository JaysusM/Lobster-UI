import "./ListItem.scss";

import * as React from 'react';
import classNames from "classnames";
import Icon, { isIconIncludedInIconLibrary, IconName } from "../Icon/Icon";
import { DOMAttributes } from "react";

export interface ListItemProps {
    id?: string,
    className?: string,
    label: string,
    icon?: IconName
}

const ListItem: React.FunctionComponent<ListItemProps & DOMAttributes<Element>> = ({ id, className, icon, label }) => {
    const wrapperClassnames: string = classNames(
        className,
        "lobster-component",
        "listitem-component", {
            "listitem-component-icon": isIconIncludedInIconLibrary(icon as string)
        }
    );


    const IconComponent = (): JSX.Element | undefined => {
        return <>
            {icon && isIconIncludedInIconLibrary(icon as string) && <Icon icon={icon} className="listitem-icon"/>}
        </>
    }

    return (
        <div id={id} className={wrapperClassnames}>
            {IconComponent()}
            <a className="listitem-label">{label}</a>
        </div>
    );
}

export default ListItem;
