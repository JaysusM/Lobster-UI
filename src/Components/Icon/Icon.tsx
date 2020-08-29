import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fas from '@fortawesome/fontawesome-free-solid';
import fontawesome, { IconProp } from "@fortawesome/fontawesome";
import { DOMAttributes } from 'react';

fontawesome.library.add(fas);

export type IconName = IconProp;

export interface IconProps {
    id?: string,
    className?: string,
    icon: IconName,
    color?: string
}

// @ts-ignore
export const isIconIncludedInIconLibrary = (iconName: string) => Object.keys(fontawesome.library.definitions.fas).includes(iconName);

const Icon: React.FunctionComponent<IconProps & DOMAttributes<SVGSVGElement>> = ({id, className, icon, color, ...events}) => {
  return (
      // @ts-ignore
    <FontAwesomeIcon color={color} className={className} icon={icon} id={id} {...events}/>
  );
}

export default Icon;
