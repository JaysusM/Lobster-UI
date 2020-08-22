import * as React from 'react';
import classNames from 'classnames';
import "./Skeleton.scss";

export enum SkeletonType {
    Text,
    Circle,
    Custom
}

export interface SkeletonProps {
    id?: string,
    className?: string,
    type?: SkeletonType,
    width?: number,
    height?: number
    radius?: number
}

const Skeleton: React.FunctionComponent<SkeletonProps> = ({ id, className, type = SkeletonType.Text, width, height, radius }) => {

    if ((!height || !width) && type === SkeletonType.Custom) {
        throw new Error("Custom Skeleton needs height and width attributes. Default values for height: fontSize, width: 100%");
    }

    if (!radius && type === SkeletonType.Circle) {
        throw new Error("Circle Skeleton needs radius attribute.");
    }

    const containerClassname: string = classNames(
        "lobster-component",
        "skeleton-component", {
        "text-skeleton": type === SkeletonType.Text,
        "custom-skeleton": type === SkeletonType.Custom,
        "circle-skeleton": type === SkeletonType.Circle
    }
    )

    let containerStyles: React.CSSProperties = {};

    switch (type) {
        case SkeletonType.Circle:
            containerStyles = {
                height: radius + "px",
                width: radius + "px"
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
