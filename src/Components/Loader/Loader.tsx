import * as React from 'react';
import classNames from 'classnames';
import "./Loader.scss";
import { DOMAttributes } from 'react';

export type LoaderColor =
    "primary" |
    "secondary" |
    "cancel" |
    "success";

export type LoaderType =
    "circle" | 
    "triple-ball" | 
    "custom-image" | 
    "progress-line";

export interface LoaderProps {
    id?: string,
    className?: string,
    color?: LoaderColor,
    type: LoaderType,
    imageUrl?: string
}

const Loader: React.FunctionComponent<LoaderProps & DOMAttributes<Element>> = ({ id, type, imageUrl, className, color = "primary", ...domAttributes }) => {

    if (type === "custom-image" && !imageUrl) {
        throw new Error("ERROR. Lobster UI. Please provide an Image URL for CustomImage Loader");
    }

    const loaderClassnames: string = classNames(
        className,
        "lobster-component",
        "loader-component", {
        "primary-color-loader": color === "primary",
        "secondary-color-loader": color === "secondary",
        "cancel-color-loader": color === "cancel",
        "success-color-loader": color === "success",
        "circle-loader": type === "circle",
        "tripleball-loader": type === "triple-ball",
        "customimage-loader": type === "custom-image",
        "progressline-loader": type === "progress-line"
    });

    const LoaderContent = (): JSX.Element | undefined => {
        switch (type) {
            case "progress-line":
            case "circle":
                return undefined;
            case "triple-ball":
                return <>
                    <div className="first-ball" />
                    <div className="second-ball" />
                    <div className="third-ball" />
                </>
            case "custom-image":
                return <img src={imageUrl} />
            default:
                return undefined;
        }
    }

    return (
        <div className={loaderClassnames} id={id} {...domAttributes}>
            {LoaderContent()}
        </div>
    );
}

export default Loader;