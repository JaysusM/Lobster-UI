import * as React from 'react';
import "./Button.scss";
import { IconName } from '../Icon/Icon';
import { DOMAttributes } from 'react';
export declare type ButtonColor = "primary" | "secondary" | "cancel" | "success" | "white";
export declare type ButtonType = "normal" | "simple";
export declare type IconAlignment = "start" | "end";
export interface ButtonProps {
    label: string;
    icon?: IconName | string;
    type?: ButtonType;
    color?: ButtonColor;
    bordered?: boolean;
    onClick?: () => void;
    hoverUnderlineEffect?: boolean;
    hoverMoveEffect?: boolean;
    disabled?: boolean;
    className?: string;
    id?: string;
    iconAlignment?: IconAlignment;
}
declare const Button: React.FunctionComponent<ButtonProps & DOMAttributes<Element>>;
export default Button;
