import * as React from 'react';
import './RadioGroup.scss';
export declare type RadioOptions = {
    label: string;
    value: string;
};
export interface RadioGroupProps {
    id?: string;
    className?: string;
    value?: string;
    onRadioChanged?: (value: string | null) => void;
    options: Array<RadioOptions>;
}
declare const RadioGroup: React.FunctionComponent<RadioGroupProps & React.DOMAttributes<Element>>;
export default RadioGroup;
