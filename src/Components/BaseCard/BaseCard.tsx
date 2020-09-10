import * as React from 'react';
import classNames from 'classnames';
import "./BaseCard.scss";
import { ReactNode, DOMAttributes } from 'react';

export type BaseCardType = "light" | "dark";

export interface BaseCardProps {
    id?: string,
    className?: string,
    children: ReactNode,
    type?: BaseCardType
}

const BaseCard: React.FunctionComponent<BaseCardProps & DOMAttributes<Element>> = ({id, className, children, type = "light", ...domAttributes}) => {
  
    const containerClassnames: string = classNames(
      className,  
      "lobster-component",
      "basecard-component", {
      "light-basecard": type === "light",
      "dark-basecard": type === "dark"
    });
  
    return (
    <div id={id} className={containerClassnames} {...domAttributes}>
      {children}
    </div>
  );
}

export default BaseCard;
