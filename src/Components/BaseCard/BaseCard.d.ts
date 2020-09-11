import * as React from 'react';
import "./BaseCard.scss";
import { ReactNode, DOMAttributes } from 'react';
export declare type BaseCardType = "light" | "dark";
export interface BaseCardProps {
    id?: string;
    className?: string;
    children: ReactNode;
    type?: BaseCardType;
}
declare const BaseCard: React.FunctionComponent<BaseCardProps & DOMAttributes<Element>>;
export default BaseCard;
