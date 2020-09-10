import * as React from 'react';
import "./Button.scss";
import classNames from "classnames";
import Icon, { isIconIncludedInIconLibrary, IconName } from '../Icon/Icon';
import { DOMAttributes } from 'react';

export type ButtonColor =
  "primary" |
  "secondary" |
  "cancel" |
  "success" |
  "white";

export type ButtonType = "normal" | "simple";

export type IconAlignment = "start" | "end";

export interface ButtonProps {
  label: string,
  icon?: IconName | string,
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

const Button: React.FunctionComponent<ButtonProps & DOMAttributes<Element>> = ({ className, id, label, icon, iconAlignment, onClick, color = "primary", type = "normal", bordered, hoverUnderlineEffect = true, hoverMoveEffect = true, disabled, ...domAttributes }) => {
  // Check if icon exists in our library, if not, we reset its value
  // @ts-ignore
  if (!isIconIncludedInIconLibrary(icon)) {
    icon = undefined;
  }

  const wrapperClassNames: string = classNames(
    className,
    "lobster-component",
    "button-wrapper",
    {
      "primary-button": color === "primary",
      "secondary-button": color === "secondary",
      "cancel-button": color === "cancel",
      "success-button": color === "success",
      "white-button": color === "white",
      "simple-button": type === "simple",
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
      "icon-start": icon && ((iconAlignment === "start") || !iconAlignment),
      "icon-end": icon && iconAlignment === "end"
    }
  )

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.preventDefault();
    event.stopPropagation();
    onClick?.();
  }

  return (
    <div className={wrapperClassNames} id={id} onClick={handleOnClick} {...domAttributes}>
      <div className={containerClassNames}>
        {icon && <Icon icon={icon} />}
        <a>{label}</a>
      </div>
    </div>
  );
}

export default Button;
