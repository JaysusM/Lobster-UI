import * as React from 'react';
import classNames from 'classnames';
import "./BaseCard.scss";
import { ReactNode } from 'react';

export enum BaseCardType {
  Light,
  Dark
}

export interface BaseCardProps {
    id?: string,
    className?: string,
    children: ReactNode,
    type?: BaseCardType
}

const BaseCard: React.FunctionComponent<BaseCardProps> = ({id, className, children, type = BaseCardType.Light}) => {
  
    const containerClassnames: string = classNames(
      className,  
      "lobster-component",
      "basecard-component", {
      "light-basecard": type === BaseCardType.Light,
      "dark-basecard": type === BaseCardType.Dark
    });
  
    return (
    <div id={id} className={containerClassnames}>
      {children}
    </div>
  );
}

export default BaseCard;
