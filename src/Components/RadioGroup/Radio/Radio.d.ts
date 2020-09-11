import * as React from 'react';
import './Radio.scss';
export interface RadioProps {
    id?: string;
    className?: string;
    selected?: boolean;
    value: string;
    label?: string;
    onRadioChanged?: (value: string | null) => void;
    isRadioGroupComponent?: boolean;
}
declare const Radio: React.FunctionComponent<RadioProps & React.DOMAttributes<Element>>;
export default Radio;
