import * as React from 'react';
import "./InputField.scss";
import { DOMAttributes } from 'react';
export declare type InputFieldType = "password" | "date" | "text";
export interface InputFieldProps {
    label: string;
    value?: string;
    onInputChanged?: (value: string) => void;
    onInputBlur?: (value: string) => void;
    bordered?: boolean;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    id?: string;
    errorMessage?: string;
    success?: boolean;
    type?: InputFieldType;
}
declare const InputField: React.FunctionComponent<InputFieldProps & DOMAttributes<Element>>;
export default InputField;
