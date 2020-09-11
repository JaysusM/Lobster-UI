import * as React from 'react';
import "./TextInput.scss";
import { DOMAttributes } from 'react';
export declare type TextInputType = "password" | "text";
export interface TextInputProps {
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
    type?: TextInputType;
}
declare const TextInput: React.FunctionComponent<TextInputProps & DOMAttributes<Element>>;
export default TextInput;
