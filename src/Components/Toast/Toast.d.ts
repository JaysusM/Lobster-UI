import * as React from 'react';
import "./Toast.scss";
import { IconName } from '@fortawesome/fontawesome';
import { DOMAttributes } from 'react';
export declare type ToastType = "information" | "warning" | "success" | "error";
export interface ToastProps {
    id?: string;
    className?: string;
    title: string;
    subtitle: string;
    type: ToastType;
    specialIcon?: IconName | string;
    isCancelable?: boolean;
    onCancel?: () => void;
}
declare const Toast: React.FunctionComponent<ToastProps & DOMAttributes<Element>>;
export default Toast;
