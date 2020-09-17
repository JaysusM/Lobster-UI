import * as React from 'react';
import "./TextArea.scss";
import classNames from 'classnames';
import { DOMAttributes, useState } from 'react';

export interface TextAreaProps {
    value?: string,
    onTextAreaChanged?: (value: string) => void,
    onTextAreaBlur?: (value: string) => void,
    bordered?: boolean,
    disabled?: boolean,
    rows?: number,
    cols?: number,
    className?: string,
    id?: string
}

const TextArea: React.FunctionComponent<TextAreaProps & DOMAttributes<Element>> = ({ id, className, value = "", onTextAreaChanged, onTextAreaBlur, bordered, disabled, cols, rows, ...domAttributes }) => {

    const [currentValue, setCurrentValue] = useState<string>(value);

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.stopPropagation();
        event.preventDefault();
        const newValue: string = event.target.value;
        onTextAreaChanged?.(newValue);
        setCurrentValue(newValue);
    }

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (disabled) {
            event.target.blur();
        }
    };

    const handleOnBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.stopPropagation();
        event.preventDefault();
        onTextAreaBlur?.(currentValue);
    };

    const wrapperClassnames: string = classNames(
        className,
        "lobster-component",
        "textarea-wrapper", {
        "textarea-wrapper-bordered": bordered,
        "textarea-disabled": disabled
    });

    return (
        <div className={wrapperClassnames} id={id}>
            <textarea value={currentValue} onBlur={handleOnBlur} onChange={handleOnChange} onFocus={handleFocus} rows={rows} cols={cols} {...domAttributes}/>
        </div>
    );
}

export default TextArea;