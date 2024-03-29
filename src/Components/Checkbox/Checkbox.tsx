import * as React from "react";
import "./Checkbox.scss";
import classNames from "classnames";
import { useState, DOMAttributes } from "react";
import Icon from "../Icon/Icon";

export enum TriState {
    Unmarked = -1,
    Neutral = 0,
    Marked = 1
}

export interface CheckboxProps {
    label?: string,
    value?: boolean | TriState,
    onCheckboxChanged?: (value: boolean | TriState) => void,
    className?: string,
    id?: string,
    isTristate?: boolean,
}

const Checkbox: React.FunctionComponent<CheckboxProps & DOMAttributes<Element>> = ({ label, id, className, isTristate, value, onCheckboxChanged, ...domAttributes }) => {

    const initialState: boolean | TriState = (isTristate) ? (value ?? TriState.Unmarked) : (value ?? false);

    const [currentValue, setCurrentValue] = useState<boolean | TriState>(initialState);

    const handleChange = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (isTristate) {
            let nextValue: boolean | TriState = TriState.Neutral;
            switch (currentValue) {
                case TriState.Unmarked:
                    nextValue = TriState.Neutral;
                    break;
                case TriState.Neutral:
                    nextValue = TriState.Marked;
                    break;
                case TriState.Marked:
                    nextValue = TriState.Unmarked;
                    break;
            }
            setCurrentValue(nextValue);
            onCheckboxChanged?.(nextValue);
        } else {
            setCurrentValue(!currentValue);
            onCheckboxChanged?.(!currentValue);
        }
    }

    const checkboxWrapperClassnames: string = classNames(
        className,
        "lobster-component",
        "checkbox-wrapper"
    );

    const checkboxContainerClassnames: string = classNames(
        "checkbox-container", {
            "checkbox-unmarked": (currentValue === TriState.Unmarked) || !currentValue,
            "checkbox-neutral": currentValue === TriState.Neutral,
            "checkbox-marked": (currentValue === TriState.Marked) || currentValue === true
    });

    return (
        <div id={id} className={checkboxWrapperClassnames} onClick={handleChange} {...domAttributes}>
            {label && <a>{label}</a>}
            <div className={checkboxContainerClassnames}>
                {((currentValue === true) || (currentValue === TriState.Marked)) && <Icon icon="check" />}
                {(currentValue === TriState.Neutral) && <div className="neutral-line" />}
            </div>
        </div>
    );
}

export default Checkbox;