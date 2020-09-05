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

const LibraryTypes: Array<String> = ["far", "fas", "fab"];

export interface IconProps {
    id?: string,
    className?: string,
    icon: IconName | string,
    color?: string
}

// @ts-ignore
export const isIconIncludedInIconLibrary = (iconName: string): boolean => {
    if (!iconName) {
        return false;
    }
    
    const iconNameSplitted: Array<string> = iconName.split(" ");

    if (iconNameSplitted.length < 2) {
        // @ts-ignore
        return Object.keys(library.definitions.fas).includes(iconName) || Object.keys(library.definitions.fab).includes(iconName) || Object.keys(library.definitions.far).includes(iconName);
    } else if (iconNameSplitted.length < 3) {
        const libraryName: string = iconNameSplitted[0];
        const icon: string = iconNameSplitted[1];

        if (!LibraryTypes.includes(libraryName)) {
            return false;
        }

        // @ts-ignore
        return Object.keys(library.definitions[libraryName]).includes(icon);
    }
        
    return false;
}

const Icon: React.FunctionComponent<IconProps & DOMAttributes<SVGSVGElement>> = ({ id, className, icon, color, ...domAttributes }) => {
    let libraryPrefix: string | undefined = undefined;
    
    if (typeof icon === "string") { 
        const iconNameSplitted: Array<string> = icon.split(" ");
        if (iconNameSplitted.length == 2) {
            const libraryName: string = iconNameSplitted[0];
            const iconName: string = iconNameSplitted[1];

            if (LibraryTypes.includes(libraryName)) {
                libraryPrefix = libraryName;
                icon = iconName;
            }
        }
    } 
    
    if (!libraryPrefix) {
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
    }

    return (
        // @ts-ignore
        <FontAwesomeIcon color={color} className={className} icon={[libraryPrefix, icon]} id={id} {...domAttributes} />
    );
}

export default Icon;
