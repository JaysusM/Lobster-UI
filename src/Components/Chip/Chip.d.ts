import * as React from 'react';
import "./Chip.scss";
import { IconName } from '../Icon/Icon';
export declare type ChipColor = "primary" | "secondary" | "cancel" | "success";
export interface ChipProps {
    id?: string;
    className?: string;
    label: string;
    color: ChipColor;
    bordered?: boolean;
    icon?: IconName;
}
declare const Chip: React.FunctionComponent<ChipProps & React.DOMAttributes<Element>>;
export default Chip;
