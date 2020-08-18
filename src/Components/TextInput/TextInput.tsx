import * as React from 'react';
import "./TextInput.scss";
import { useState, useRef } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fas from '@fortawesome/fontawesome-free-solid';
import fontawesome from "@fortawesome/fontawesome";

fontawesome.library.add(fas);

export interface TextInputProps {
  label: string,
  value?: string,
  onChange?: (value: string) => void,
  bordered?: boolean,
  placeholder?: string,
  disabled?: boolean,
  className?: string,
  id?: string,
  error?: string
}

const TextInput: React.FunctionComponent<TextInputProps> = ({ id, className, label, error, placeholder, value, onChange, bordered, disabled }) => {

  const inputRef: any = useRef();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [isErrorInformationHovered, setIsErrorInformationHovered] = useState<boolean>(false);
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
    "textinput-error": error
  });

  const errorIconClassnames: string = classNames(
    "error-information", {
    "error-information-focus": isInputFocused
  });

  const handleLabelClick = () => {
    if (!disabled) {
      inputRef.current.focus();
    }
  };

  const handleInformationMouseOver = (event: React.MouseEvent<SVGSVGElement | HTMLAnchorElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsErrorInformationHovered(true);
  };

  const handleInformationMouseOut = (event: React.MouseEvent<SVGSVGElement | HTMLAnchorElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsErrorInformationHovered(false);
  };

  return (
    <div className={wrapperClassnames} id={id}>
      {label && <label onClick={handleLabelClick} className={labelClassnames}>{label}</label>}
      {error && <>
        <FontAwesomeIcon icon="info-circle" className={errorIconClassnames} onMouseOver={handleInformationMouseOver} onMouseLeave={handleInformationMouseOut}/>
        <a className={errorTextClassnames} onMouseOver={handleInformationMouseOver} onMouseLeave={handleInformationMouseOut}>{error}</a>
      </>}
      <input ref={inputRef} className={inputClassnames} type="text" placeholder={placeholder} value={value} onChange={handleOnChange} onFocus={handleInputFocus} onBlur={handleInputFocusLose} />
    </div>
  );
}

export default TextInput;