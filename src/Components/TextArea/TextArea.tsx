import * as React from 'react';
import "./TextArea.scss";
import classNames from 'classnames';

export interface TextAreaProps {
    value?: string,
    onChange?: (value: string) => void,
    bordered?: boolean,
    disabled?: boolean,
    rows?: number,
    cols?: number,
    className?: string,
    id?: string
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({ id, className, value, onChange, bordered, disabled, cols, rows }) => {

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.stopPropagation();
        event.preventDefault();
        const newValue: string = event.target.value;
        onChange?.(newValue);
    }

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (disabled) {
            event.target.blur();
        }
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
            <textarea value={value} onChange={handleOnChange} onFocus={handleFocus} rows={rows} cols={cols} />
        </div>
    );
}

export default TextArea;