import * as React from 'react';
import classNames from 'classnames';
import "./Loader.scss";

export enum LoaderColor {
    Primary,
    Secondary,
    Cancel,
    Success
}

export enum LoaderType {
    Circle,
    TripleBall,
    CustomImage,
    ProgressLine
}

export interface LoaderProps {
    id?: string,
    className?: string,
    color?: LoaderColor,
    type: LoaderType,
    imageUrl?: string
}

const Loader: React.FunctionComponent<LoaderProps> = ({id, type, imageUrl, className, color = LoaderColor.Primary}) => {

    if (type === LoaderType.CustomImage && !imageUrl) {
        throw new Error("ERROR. Lobster UI. Please provide an Image URL for CustomImage Loader");
    }

    const loaderClassnames: string = classNames(
        className,
        "lobster-component", 
        "loader-component", {
            "primary-color-loader": color === LoaderColor.Primary,
            "secondary-color-loader": color === LoaderColor.Secondary,
            "cancel-color-loader": color === LoaderColor.Cancel,
            "success-color-loader": color === LoaderColor.Success,
            "circle-loader": type === LoaderType.Circle,
            "tripleball-loader": type === LoaderType.TripleBall,
            "customimage-loader": type === LoaderType.CustomImage,
            "progressline-loader": type === LoaderType.ProgressLine
        });

const LoaderContent = (): JSX.Element | undefined => {
    switch (type) {
        case LoaderType.ProgressLine:
        case LoaderType.Circle:
            return undefined;
        case LoaderType.TripleBall:
            return <>
                <div className="first-ball"/>
                <div className="second-ball"/>
                <div className="third-ball"/>
            </>
        case LoaderType.CustomImage:
            return <img src={imageUrl} />
        default:
            return undefined;
    }
}

  return (
    <div className={loaderClassnames} id={id}>
        {LoaderContent()}
    </div>
  );
}

export default Loader;