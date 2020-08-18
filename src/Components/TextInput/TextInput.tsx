import * as React from 'react';
import "./TextInput.scss";
import { useState, useRef } from 'react';
import classNames from 'classnames';

export interface TextInputProps {
  label: string,
  value?: string,
  onChange?: (value: string) => void,
  bordered?: boolean,
  placeholder?: string,
  disabled?: boolean,
  className?: string,
  id?: string
}

const TextInput: React.FunctionComponent<TextInputProps> = ({ id, className, label, placeholder, value, onChange, bordered, disabled }) => {

  const inputRef: any = useRef();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | undefined>(value);

  const removeFocusInInput = () => {
    inputRef?.current?.blur();
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const newValue: string = event.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  }

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (!disabled) {
      setIsInputFocused(true);
    } else {
      removeFocusInInput();
    }
  }

  const handleInputFocusLose = (event: React.FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (!disabled) {
      setIsInputFocused(false);
    } else {
      removeFocusInInput();
    }
  }

  const labelClassnames: string = classNames("textinput-label", {
    "textinput-label-focus": isInputFocused,
    "textinput-label-active": isInputFocused || (inputValue && inputValue.length > 0)
  });

  const inputClassnames: string = classNames({
    "textinput-filled": (inputValue && inputValue.length > 0)
  });

  const wrapperClassnames: string = classNames(
    className,
    "lobster-component",
    "textinput-wrapper", {
    "textinput-wrapper-bordered": bordered,
    "textinput-disabled": disabled
  });

  const handleLabelClick = () => {
    if (!disabled) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={wrapperClassnames} id={id}>
      {label && <label onClick={handleLabelClick} className={labelClassnames}>{label}</label>}
      <input ref={inputRef} className={inputClassnames} type="text" placeholder={placeholder} value={value} onChange={handleOnChange} onFocus={handleInputFocus} onBlur={handleInputFocusLose} />
    </div>
  );
}

export default TextInput;