import * as React from 'react';
import classNames from 'classnames';
import "./Toast.scss";
import Icon from '../Icon/Icon';
import { IconName } from '@fortawesome/fontawesome';
import { DOMAttributes } from 'react';

export type ToastType =
    "information" |
    "warning" |
    "success" |
    "error";

export interface ToastProps {
    id?: string,
    className?: string,
    title: string,
    subtitle: string,
    type: ToastType,
    specialIcon?: IconName | string,
    isCancelable?: boolean,
    onCancel?: () => void
}

const Toast: React.FunctionComponent<ToastProps & DOMAttributes<Element>> = ({id, className, title, subtitle, type, specialIcon, isCancelable, onCancel, ...domAttributes}) => {
  
    if (Boolean(isCancelable) !== Boolean(onCancel)) {
        throw new Error("ERROR. You need to provide both or none arguments isCancelable and onCancel for Toast component");
    }

    const wrapperClassnames = classNames(
        className,
        "lobster-component",
        "toast-component", {
            "information-toast": type === "information",
            "warning-toast": type === "warning",
            "success-toast": type === "success",
            "error-toast": type === "error",
            "cancelable-toast": isCancelable
        }
    );

    const containerClassnames = classNames(
        "toast-container"
    );

    let toastIcon: IconName | string | undefined = specialIcon;
    if (!toastIcon) {
        switch (type) {
            case "error":
                toastIcon = "times-circle";
                break;
            case "warning":
                toastIcon = "exclamation-circle";
                break;
            case "success":
                toastIcon = "check-circle";
                break;
            case "information":
            default:
                toastIcon = "info-circle";
                break;
        }
    }

  return (
    <div className={wrapperClassnames} id={id} {...domAttributes}>
        <Icon icon={toastIcon} />
        <div className={containerClassnames}>
            <a className="toast-title">{title}</a>
            <a className="toast-subtitle">{subtitle}</a>
        </div>
        {isCancelable && <Icon icon="times" className="toast-cancel" onClick={onCancel}/>}
    </div>
  );
}

export default Toast;