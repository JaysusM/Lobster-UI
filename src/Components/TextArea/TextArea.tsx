import * as React from 'react';
import "./TextArea.scss";
import classNames from 'classnames';

export interface TextInputProps {
    value?: string,
    onChange?: (value: string) => void,
    bordered?: boolean,
    disabled?: boolean,
    rows?: number,
    cols?: number,
    className?: string
}

const TextArea: React.FunctionComponent<TextInputProps> = ({ className, value, onChange, bordered, disabled, cols, rows }) => {

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
        "textarea-wrapper", {
        "textarea-wrapper-bordered": bordered,
        "textarea-disabled": disabled
    });

    return (
        <div className={wrapperClassnames}>
            <textarea value={value} onChange={handleOnChange} onFocus={handleFocus} rows={rows} cols={cols} />
        </div>
    );
}

export default TextArea;