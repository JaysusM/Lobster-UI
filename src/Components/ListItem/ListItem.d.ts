import "./ListItem.scss";
import * as React from 'react';
import { IconName } from "../Icon/Icon";
import { DOMAttributes } from "react";
export interface ListItemProps {
    id?: string;
    className?: string;
    label: string;
    icon?: IconName | string;
    children?: React.ReactNode;
}
declare const ListItem: React.FunctionComponent<ListItemProps & DOMAttributes<Element>>;
export default ListItem;
