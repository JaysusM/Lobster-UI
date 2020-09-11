import * as React from 'react';
import "./TextArea.scss";
import { DOMAttributes } from 'react';
export interface TextAreaProps {
    value?: string;
    onTextAreaChanged?: (value: string) => void;
    bordered?: boolean;
    disabled?: boolean;
    rows?: number;
    cols?: number;
    className?: string;
    id?: string;
}
declare const TextArea: React.FunctionComponent<TextAreaProps & DOMAttributes<Element>>;
export default TextArea;
