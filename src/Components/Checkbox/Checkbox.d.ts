import * as React from "react";
import "./Checkbox.scss";
import { DOMAttributes } from "react";
export declare enum TriState {
    Unmarked = -1,
    Neutral = 0,
    Marked = 1
}
export interface CheckboxProps {
    label?: string;
    value?: boolean | TriState;
    onCheckboxChanged?: (value: boolean | TriState) => void;
    className?: string;
    id?: string;
    isTristate?: boolean;
}
declare const Checkbox: React.FunctionComponent<CheckboxProps & DOMAttributes<Element>>;
export default Checkbox;
