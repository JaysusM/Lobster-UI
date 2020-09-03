import * as React from 'react';
import classNames from 'classnames';
import './Radio.scss';

export interface RadioProps {
    id?: string,
    className?: string,
    selected?: boolean,
    value?: string,
    label?: string,
    onChange?: (value: string | null) => void
}

const Radio: React.FunctionComponent<RadioProps & React.DOMAttributes<Element>> = ({id, className, label, value, selected, onChange, ...domAttributes}) => {
    const [isSelected, setIsSelected] = React.useState<boolean>(selected ?? false);

    const wrapperClassnames: string = classNames(
        "lobster-component",
        "radio-wrapper", {
            "radio-selected": isSelected
        }
    );

    const containerClassnames: string = classNames(
        "radio-container", {
            "radio-selected": isSelected
        }
    );

    const onRadioClicked = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        const isNewSelected: boolean = !isSelected;
        onChange?.(isNewSelected ? value ?? null : null);
        setIsSelected(isNewSelected);
    }

  return (
    <div className={wrapperClassnames}>
        {label && <a>{label}</a>}
        <div className={containerClassnames} onClick={onRadioClicked}/>
    </div>
  );
}

export default Radio;