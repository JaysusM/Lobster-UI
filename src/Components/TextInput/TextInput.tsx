import * as React from 'react';
import "./TextInput.scss";
import { useState, useRef, DOMAttributes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

export enum TextInputType {
  Password = "password",
  Text = "text"
}

export interface TextInputProps {
  label: string,
  value?: string,
  onInputChanged?: (value: string) => void,
  onInputBlur?: (value: string) => void,
  bordered?: boolean,
  placeholder?: string,
  disabled?: boolean,
  className?: string,
  id?: string,
  errorMessage?: string,
  success?: boolean,
  type?: TextInputType
}

const TextInput: React.FunctionComponent<TextInputProps & DOMAttributes<Element>> = ({ type = TextInputType.Text, id, className, label, errorMessage, success, placeholder, value, onInputBlur, onInputChanged, bordered, disabled, ...domAttributes }) => {

  const inputRef: any = useRef();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [isErrorInformationHovered, setIsErrorInformationHovered] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | undefined>(value);
  const [isLockOpen, setIsLockOpen] = useState<boolean>(false);

  const removeFocusInInput = () => {
    inputRef?.current?.blur();
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const newValue: string = event.target.value;
    setInputValue(newValue);
    onInputChanged?.(newValue);
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
      onInputBlur?.(event.target.value);
    } else {
      removeFocusInInput();
    }
  }

  const labelClassnames: string = classNames("textinput-label", {
    "textinput-label-focus": isInputFocused,
    "textinput-label-active": isInputFocused || (inputValue && inputValue.length > 0)
  });

  const errorTextClassnames: string = classNames("textinput-errortext", {
    "textinput-errortext-show": isErrorInformationHovered
  });

  const inputClassnames: string = classNames({
    "textinput-filled": (inputValue && inputValue.length > 0)
  });

  const wrapperClassnames: string = classNames(
    className,
    "lobster-component",
    "textinput-wrapper", {
    "textinput-wrapper-bordered": bordered,
    "textinput-disabled": disabled,
    "textinput-error": errorMessage,
    "textinput-success": success && !errorMessage,
    "textinput-password": type === TextInputType.Password
  });

  const errorIconClassnames: string = classNames(
    "error-information", {
    "error-information-focus": isInputFocused
  });

  const successIconClassnames: string = classNames("success-icon", {
    "success-information-focus": isInputFocused
  });

  const lockIconClassnames: string = classNames("lock-icon", {
    "lock-icon-focus": isInputFocused
  });

  const handleLabelClick = () => {
    if (!disabled) {
      inputRef.current.focus();
    }
  };

  const handleInformationMouseOver = (event: React.MouseEvent<SVGSVGElement | HTMLAnchorElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isInputFocused) {
      setIsErrorInformationHovered(true);
    }
  };

  const handleInformationMouseOut = (event: React.MouseEvent<SVGSVGElement | HTMLAnchorElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsErrorInformationHovered(false);
  };

  const PasswordShowIcon = () => {
    const handlePasswordIconClick = (event: React.MouseEvent<SVGSVGElement>) => {
      event.stopPropagation();
      event.preventDefault();
      setIsLockOpen(!isLockOpen);
    }
    const iconString: "lock-open" | "lock" = (isLockOpen) ? "lock-open" : "lock";
    return type === TextInputType.Password && !errorMessage && <Icon icon={iconString} className={lockIconClassnames} onClick={handlePasswordIconClick} />
  }

  const InputField = () => {
    const fieldInputType: TextInputType = (type === TextInputType.Password && isLockOpen) ? TextInputType.Text : type;
    return <input ref={inputRef} className={inputClassnames} type={fieldInputType} placeholder={placeholder} value={value} onChange={handleOnChange} onFocus={handleInputFocus} onBlur={handleInputFocusLose} />
  }

  return (
    <div className={wrapperClassnames} id={id} {...domAttributes}>
      {label && <label onClick={handleLabelClick} className={labelClassnames}>{label}</label>}
      {errorMessage && <>
        <Icon icon="info-circle" className={errorIconClassnames} onMouseOver={handleInformationMouseOver} onMouseLeave={handleInformationMouseOut} />
        <a className={errorTextClassnames} onMouseOver={handleInformationMouseOver} onMouseLeave={handleInformationMouseOut}>{errorMessage}</a>
      </>}
      {success && !errorMessage && <Icon icon="check-circle" className={successIconClassnames} />}
      {PasswordShowIcon()}
      {InputField()}
    </div>
  );
}

export default TextInput;