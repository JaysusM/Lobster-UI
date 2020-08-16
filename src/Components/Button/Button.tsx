import * as React from 'react';
import "./Button.scss";
import classNames from "classnames";

export enum ButtonType {
  Primary,
  Secondary,
  Cancel
}

export interface ButtonProps {
  label: string,
  icon?: string,
  buttonType?: ButtonType,
  bordered?: boolean,
  onClick?: () => void,
  hoverUnderlineEffect?: boolean,
  hoverMoveEffect?: boolean,
  disabled?: boolean
}

const Button: React.FunctionComponent<ButtonProps> = ({ label, icon, onClick, buttonType = ButtonType.Primary, bordered, hoverUnderlineEffect = true, hoverMoveEffect = true, disabled }) => {

  const wrapperClassNames: string = classNames(
    "button-wrapper",
    {
      "primary-button": buttonType === ButtonType.Primary,
      "secondary-button": buttonType === ButtonType.Secondary,
      "cancel-button": buttonType === ButtonType.Cancel,
      "border-button": bordered,
      "underline-effect": hoverUnderlineEffect && !disabled,
      "move-effect": hoverMoveEffect && !disabled,
      "disabled-button": disabled
    }
  )

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      event.preventDefault();
      event.stopPropagation();
      onClick?.();
    }

  return (
    <div className={wrapperClassNames} onClick={handleOnClick}>
      <a>{label}</a>
    </div>
  );
}

export default Button;
