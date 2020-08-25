import * as React from 'react';
import "./Button.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fas from '@fortawesome/fontawesome-free-solid';
import fontawesome from "@fortawesome/fontawesome";

fontawesome.library.add(fas);

export enum ButtonColor {
  Primary,
  Secondary,
  Cancel,
  Success,
  White
}

export enum ButtonType {
  Normal,
  Simple
}

export enum IconAlignment {
  Start,
  End
}

export interface ButtonProps {
  label: string,
  icon?: any,
  type?: ButtonType,
  color?: ButtonColor,
  bordered?: boolean,
  onClick?: () => void,
  hoverUnderlineEffect?: boolean,
  hoverMoveEffect?: boolean,
  disabled?: boolean,
  className?: string,
  id?: string,
  iconAlignment?: IconAlignment
}

const Button: React.FunctionComponent<ButtonProps> = ({ className, id, label, icon, iconAlignment, onClick, color = ButtonColor.Primary, type = ButtonType.Normal, bordered, hoverUnderlineEffect = true, hoverMoveEffect = true, disabled }) => {

  // Check if icon exists in our library, if not, we reset its value
  // @ts-ignore
  if(!Object.keys(fontawesome.library.definitions.fas).includes(icon)) {
      icon = undefined;
  }

  const wrapperClassNames: string = classNames(
    className,
    "lobster-component",
    "button-wrapper",
    {
      "primary-button": color === ButtonColor.Primary,
      "secondary-button": color === ButtonColor.Secondary,
      "cancel-button": color === ButtonColor.Cancel,
      "success-button": color === ButtonColor.Success,
      "white-button": color === ButtonColor.White,
      "simple-button": type === ButtonType.Simple,
      "border-button": bordered,
      "underline-effect": hoverUnderlineEffect && !disabled,
      "move-effect": hoverMoveEffect && !disabled,
      "disabled-button": disabled,
      "icon-button": icon
    }
  )

  const containerClassNames: string = classNames(
    "button-container",
    {
      "icon-start": icon && ((iconAlignment === IconAlignment.Start) || !iconAlignment),
      "icon-end": icon && iconAlignment === IconAlignment.End
    }
  )

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.preventDefault();
    event.stopPropagation();
    onClick?.();
  }

  return (
    <div className={wrapperClassNames} id={id} onClick={handleOnClick}>
      <div className={containerClassNames}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <a>{label}</a>
      </div>
    </div>
  );
}

export default Button;
