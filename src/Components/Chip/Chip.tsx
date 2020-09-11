import * as React from 'react';
import classNames from 'classnames';
import "./Chip.scss";
import Icon, { IconName, isIconIncludedInIconLibrary } from '../Icon/Icon';

export type ChipColor = "primary" | "secondary" | "cancel" | "success";

export interface ChipProps {
    id?: string,
    className?: string,
    label: string,
    color: ChipColor,
    bordered?: boolean,
    icon?: IconName
}

const Chip: React.FunctionComponent<ChipProps & React.DOMAttributes<Element>> = ({ id, className, label, color = "primary", icon, bordered, ...args }) => {
    const wrapperClassnames: string = classNames(
        className,
        "lobster-component",
        "chip-component", {
        "primary-chip": color === "primary",
        "secondary-chip": color === "secondary",
        "cancel-chip": color === "cancel",
        "success-chip": color === "success",
        "bordered-chip": bordered
    }
    );

    const IconComponent = () => {
        return <>
            {icon && isIconIncludedInIconLibrary(icon as string) && <div className="chip-icon"><Icon icon={icon} /></div>}
        </>
    }

    return (
        <div id={id} className={wrapperClassnames} {...args}>
            {IconComponent()}
            <a className="chip-label">{label}</a>
        </div>
    );
}

export default Chip;
