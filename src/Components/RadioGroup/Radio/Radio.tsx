import * as React from 'react';
import classNames from 'classnames';
import './Radio.scss';

export interface RadioProps {
    id?: string,
    className?: string,
    selected?: boolean,
    value?: string,
    label?: string,
    onRadioChanged?: (value: string | null) => void,
    isRadioGroupComponent?: boolean
}

const Radio: React.FunctionComponent<RadioProps & React.DOMAttributes<Element>> = ({id, className, label, value, selected, onRadioChanged, isRadioGroupComponent, ...domAttributes}) => {
    const [isSelected, setIsSelected] = React.useState<boolean>(selected ?? false);

    React.useEffect(() => {
        setIsSelected(selected ?? false);
    }, [selected]);

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
        if (isNewSelected || !isRadioGroupComponent) {
            onRadioChanged?.(isNewSelected ? value ?? null : null);
            setIsSelected(isNewSelected);
        }
    }

  return (
    <div className={wrapperClassnames} id={id} {...domAttributes}>
        {label && <a>{label}</a>}
        <div className={containerClassnames} onClick={onRadioClicked}/>
    </div>
  );
}

export default Radio;