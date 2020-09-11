import * as React from 'react';
import { IconProp } from '@fortawesome/fontawesome';
import { DOMAttributes } from 'react';
export declare type IconName = IconProp;
export interface IconProps {
    id?: string;
    className?: string;
    icon: IconName | string;
    color?: string;
}
export declare const isIconIncludedInIconLibrary: (iconName: string) => boolean;
declare const Icon: React.FunctionComponent<IconProps & DOMAttributes<SVGSVGElement>>;
export default Icon;
