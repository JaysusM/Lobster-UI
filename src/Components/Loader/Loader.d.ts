import * as React from 'react';
import "./Loader.scss";
import { DOMAttributes } from 'react';
export declare type LoaderColor = "primary" | "secondary" | "cancel" | "success";
export declare type LoaderType = "circle" | "triple-ball" | "custom-image" | "progress-line";
export interface LoaderProps {
    id?: string;
    className?: string;
    color?: LoaderColor;
    type: LoaderType;
    imageUrl?: string;
}
declare const Loader: React.FunctionComponent<LoaderProps & DOMAttributes<Element>>;
export default Loader;
