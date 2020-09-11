import * as React from 'react';
import "./Switch.scss";
import { IconName } from '../Icon/Icon';
export interface SwitchProps {
    id?: string;
    className?: string;
    value?: boolean;
    type?: SwitchType;
    color?: SwitchColor;
    unselectedIcon?: IconName | string;
    selectedIcon?: IconName | string;
    onSwitchChanged?: (value: boolean) => void;
}
export declare type SwitchType = "rounded" | "squared" | "line";
export declare type SwitchColor = "primary" | "secondary" | "cancel" | "success";
declare const Switch: React.FunctionComponent<SwitchProps & React.DOMAttributes<Element>>;
export default Switch;
