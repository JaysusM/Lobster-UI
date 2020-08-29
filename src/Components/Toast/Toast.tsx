import * as React from 'react';
import classNames from 'classnames';
import "./Toast.scss";
import Icon from '../Icon/Icon';
import { IconName } from '@fortawesome/fontawesome';

export enum ToastType {
    Information,
    Warning,
    Success,
    Error
}

export interface ToastProps {
    id?: string,
    className?: string,
    title: string,
    subtitle: string,
    type: ToastType
}

const Toast: React.FunctionComponent<ToastProps> = ({id, className, title, subtitle, type}) => {
  
    const wrapperClassnames = classNames(
        className,
        "lobster-component",
        "toast-component", {
            "information-toast": type === ToastType.Information,
            "warning-toast": type === ToastType.Warning,
            "success-toast": type === ToastType.Success,
            "error-toast": type === ToastType.Error
        }
    );

    const containerClassnames = classNames(
        "toast-container"
    );

    let toastIcon: IconName;
    switch (type) {
        case ToastType.Error:
        case ToastType.Warning:
            toastIcon = "exclamation-circle";
            break;
        case ToastType.Success:
            toastIcon = "check-circle";
            break;
        case ToastType.Information:
        default:
            toastIcon = "info-circle";
            break;
    }

  return (
    <div className={wrapperClassnames} id={id}>
        <Icon icon={toastIcon} />
        <div className={containerClassnames}>
            <a className="toast-title">{title}</a>
            <a className="toast-subtitle">{subtitle}</a>
        </div>
    </div>
  );
}

export default Toast;