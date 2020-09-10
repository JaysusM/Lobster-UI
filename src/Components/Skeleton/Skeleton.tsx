import * as React from 'react';
import classNames from 'classnames';
import "./Skeleton.scss";
import { DOMAttributes } from 'react';

export type SkeletonType = 
    "text" |
    "circular" |
    "custom";

export type SkeletonAnimation =
    "blink" |
    "wave";

export interface SkeletonProps {
    id?: string,
    className?: string,
    type?: SkeletonType,
    width?: number,
    height?: number,
    animation?: SkeletonAnimation
}

const Skeleton: React.FunctionComponent<SkeletonProps & DOMAttributes<Element>> = ({ id, className, type = "text", width, height, animation = "blink", ...domAttributes }) => {

    if ((!height || !width) && ["custom", "circular"].includes(type)) {
        throw new Error("Custom and Circular Skeleton needs height and width attributes. Default values for height: fontSize, width: 100%");
    }

    const containerClassname: string = classNames(
        className,
        "lobster-component",
        "skeleton-component", {
        "text-skeleton": type === "text",
        "custom-skeleton": type === "custom",
        "circular-skeleton": type === "circular",
        "blink-animation": animation === "blink",
        "wave-animation": animation === "wave"
    });

    let containerStyles: React.CSSProperties = {};

    switch (type) {
        case "circular":
            containerStyles = {
                height: height + "px",
                width: width + "px"
            };
            break;
        case "custom":
            containerStyles = {
                height: height + "px",
                width: width + "px"
            };
            break;
        case "text":
            containerStyles = {
                width: width + "px"
            };
            break;
    }

    return (
        <div className={containerClassname} style={containerStyles} id={id} {...domAttributes}/>
    );
}

export default Skeleton;
