import * as React from 'react';
import classNames from 'classnames';
import "./Skeleton.scss";

export enum SkeletonType {
    Text,
    Circular,
    Custom
}

export interface SkeletonProps {
    id?: string,
    className?: string,
    type?: SkeletonType,
    width?: number,
    height?: number
}

const Skeleton: React.FunctionComponent<SkeletonProps> = ({ id, className, type = SkeletonType.Text, width, height }) => {

    if ((!height || !width) && [SkeletonType.Custom, SkeletonType.Circular].includes(type)) {
        throw new Error("Custom and Circular Skeleton needs height and width attributes. Default values for height: fontSize, width: 100%");
    }

    const containerClassname: string = classNames(
        "lobster-component",
        "skeleton-component", {
        "text-skeleton": type === SkeletonType.Text,
        "custom-skeleton": type === SkeletonType.Custom,
        "circular-skeleton": type === SkeletonType.Circular
    }
    )

    let containerStyles: React.CSSProperties = {};

    switch (type) {
        case SkeletonType.Circular:
            containerStyles = {
                height: height + "px",
                width: width + "px"
            };
            break;
        case SkeletonType.Custom:
            containerStyles = {
                height: height + "px",
                width: width + "px"
            };
            break;
        case SkeletonType.Text:
            containerStyles = {
                width: width + "px"
            };
            break;
    }

    return (
        <div className={containerClassname} style={containerStyles} />
    );
}

export default Skeleton;
