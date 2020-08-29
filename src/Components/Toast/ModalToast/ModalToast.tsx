import React, { useEffect, useState } from "react";
import Toast, { ToastType, ToastProps } from "./../Toast";
import ReactDOM from "react-dom";
import "./ModalToast.scss";

export type ModalToastProps = {
    duration: number,
    id?: string,
    className?: string,
    onDispose?: () => void
} & ToastProps;

export const ModalToast = ({ duration, id, className, onDispose, ...args }: ModalToastProps): JSX.Element => {
    const [toastElement, setToastElement] = useState<HTMLDivElement>();

    const cleanModalToast = () => {
        setTimeout(() => {
            if (toastElement) {
                document.body.removeChild(toastElement);
                onDispose?.();
            }
        }, 510);
    }

    const cancelModalToast = () => {
        if (toastElement) {
            toastElement.classList.remove("modaltoast-show");
            toastElement.classList.add("modaltoast-hidden");
            cleanModalToast();
        }
    }

    useEffect(() => {
        const toastElement: HTMLDivElement = document.createElement("div");

        if (className) {
            toastElement.classList.add(className)
        }

        if (id) {
            toastElement.id = id;
        }

        toastElement.classList.add("lobster-component", "modaltoast-component", "modaltoast-hidden");
        document.body.prepend(toastElement);

        setToastElement(toastElement);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (toastElement) {
                toastElement.classList.add("modaltoast-show");
                toastElement.classList.remove("modaltoast-hidden");
                setTimeout(cancelModalToast, duration);
            }
        }, 1);
    }, [toastElement]);

    return (toastElement) ? ReactDOM.createPortal(<Toast {...args} isCancelable={true} onCancel={cancelModalToast} />, toastElement) : <React.Fragment />;
}