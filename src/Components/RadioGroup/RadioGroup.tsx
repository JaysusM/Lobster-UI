import * as React from 'react';
import classNames from 'classnames';
import './RadioGroup.scss';
import Radio from './Radio/Radio';

export type RadioOptions = {
    label: string,
    value: string
}

export interface RadioProps {
    id?: string,
    className?: string,
    value?: string,
    onRadioChanged?: (value: string | null) => void,
    options: Array<RadioOptions>
}

const RadioGroup: React.FunctionComponent<RadioProps & React.DOMAttributes<Element>> = ({id, className, value, onRadioChanged, options, ...domAttributes}) => {
    const [currentValue, setCurrentValue] = React.useState<string | null>(value ?? null);

    if (!options.every((option) => options.filter((filterOption) => filterOption.value == option.value).length == 1)) {
        throw new Error("ERROR. RadioGroup options must have different values");
    }

    const wrapperClassnames: string = classNames(
        "lobster-component",
        "radiogroup-wrapper"
    );

    const handleRadioButtonClicked = (value: string | null): void => {
        if (value !== null) {
            setCurrentValue(value);
            onRadioChanged?.(value);
        } else {
            if (!currentValue) {
                setCurrentValue(options?.[0].value);
            } else {
                setCurrentValue(options?.[0].value);
            }
        }
    }

    const RadioOptions = (): React.ReactNode => {
        return <>
            {options && options.map((option, index) => <Radio isRadioGroupComponent={true} key={index} label={option.label} value={option.value} selected={(!currentValue && index == 0) || option.value === currentValue} onRadioChanged={handleRadioButtonClicked}/>
            )}
        </>;
    }

  return (
    <div className={wrapperClassnames} {...domAttributes} id={id}>
        {RadioOptions()}
    </div>
  );
}

export default RadioGroup;