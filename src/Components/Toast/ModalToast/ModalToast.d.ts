import { FunctionComponent, DOMAttributes } from "react";
import { ToastProps } from "./../Toast";
import "./ModalToast.scss";
export declare type ModalToastProps = {
    duration: number;
    id?: string;
    className?: string;
    onDispose?: () => void;
} & ToastProps;
declare const ModalToast: FunctionComponent<ModalToastProps & DOMAttributes<Element>>;
export default ModalToast;
