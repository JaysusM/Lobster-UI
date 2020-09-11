import * as React from 'react';
import "./Skeleton.scss";
import { DOMAttributes } from 'react';
export declare type SkeletonType = "text" | "circular" | "custom";
export declare type SkeletonAnimation = "blink" | "wave";
export interface SkeletonProps {
    id?: string;
    className?: string;
    type?: SkeletonType;
    width?: number;
    height?: number;
    animation?: SkeletonAnimation;
}
declare const Skeleton: React.FunctionComponent<SkeletonProps & DOMAttributes<Element>>;
export default Skeleton;
