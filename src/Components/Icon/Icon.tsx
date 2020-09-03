import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { DOMAttributes } from 'react';

library.add(fab, far, fas);

export type IconName = IconProp;

export interface IconProps {
    id?: string,
    className?: string,
    icon: IconName,
    color?: string
}

// @ts-ignore
export const isIconIncludedInIconLibrary = (iconName: string) => Object.keys(library.definitions.fas).includes(iconName) || Object.keys(library.definitions.fab).includes(iconName) || Object.keys(library.definitions.far).includes(iconName);

const Icon: React.FunctionComponent<IconProps & DOMAttributes<SVGSVGElement>> = ({ id, className, icon, color, ...domAttributes }) => {
    let libraryPrefix: string;
    // @ts-ignore
    if (Object.keys(library.definitions.fas).includes(icon)) {
        libraryPrefix = "fas";
    // @ts-ignore
    } else if (Object.keys(library.definitions.far).includes(icon)) {
        libraryPrefix = "far";
    // @ts-ignore
    } else if (Object.keys(library.definitions.fab).includes(icon)) {
        libraryPrefix = "fab";
    }

    return (
        // @ts-ignore
        <FontAwesomeIcon color={color} className={className} icon={[libraryPrefix, icon]} id={id} {...domAttributes} />
    );
}

export default Icon;
