import * as React from 'react';
import "./Switch.scss";
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import Icon, { isIconIncludedInIconLibrary, IconName } from '../Icon/Icon';

export interface SwitchProps {
    id?: string,
    className?: string,
    value?: boolean,
    type?: SwitchType,
    color?: SwitchColor,
    unselectedIcon?: IconName | string,
    selectedIcon?: IconName | string,
    onSwitchChanged?: (value: boolean) => void
}

export enum SwitchType {
    Rounded,
    Squared,
    Line
}

export enum SwitchColor {
    Primary,
    Secondary,
    Cancel,
    Success
}

const Switch: React.FunctionComponent<SwitchProps & React.DOMAttributes<Element>> = ({ id, className, value = false, type = SwitchType.Rounded, onSwitchChanged, color = SwitchColor.Primary, unselectedIcon, selectedIcon }) => {

    const [currentValue, setCurrentValue] = useState<boolean>(value);

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    const containerClassnames: string = classNames(
        className,
        "lobster-component",
        "switch-component", {
            "switch-active": currentValue,
            "switch-rounded": type === SwitchType.Rounded,
            "switch-squared": type === SwitchType.Squared,
            "switch-line": type === SwitchType.Line,
            "switch-primarycolor": color === SwitchColor.Primary,
            "switch-secondarycolor": color === SwitchColor.Secondary,
            "switch-cancelcolor": color === SwitchColor.Cancel,
            "switch-successcolor": color === SwitchColor.Success
        }
    );

        const handleSwitchClick = (event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
            event.preventDefault();
            onSwitchChanged?.(!currentValue);
            setCurrentValue(!currentValue);
        }

        const SelectedIcon = () => {
            return <>
                {selectedIcon && isIconIncludedInIconLibrary(selectedIcon as string) && <Icon icon={selectedIcon} className="switch-selectedicon"/>}
            </>
        };

        const UnselectedIcon = () => {
            return <>
                {unselectedIcon && isIconIncludedInIconLibrary(unselectedIcon as string) && <Icon icon={unselectedIcon} className="switch-unselectedicon"/>}
            </>
        }

    return (
        <div id={id} className={containerClassnames} onClick={handleSwitchClick}>
            <div className="switch-selector">
                {SelectedIcon()}
                {UnselectedIcon()}
            </div>
        </div>
    );
}

export default Switch;
