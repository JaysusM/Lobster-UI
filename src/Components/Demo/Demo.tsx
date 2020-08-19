import * as React from 'react';
import Button, { ButtonType, IconAlignment } from '../Button/Button';
import "./Demo.scss";
import TextInput, { TextInputType } from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import Checkbox from '../Checkbox/Checkbox';
import Loader, { LoaderColor, LoaderType } from '../Loader/Loader';

export const Demo = () => {
  return (
    <>
      <h1>Button Component</h1>
      <h3>Normal</h3>
      <div className="row-container">
        <Button label={"Simple"} buttonType={ButtonType.Simple} />
        <Button label={"Primary"} buttonType={ButtonType.Primary} />
        <Button label={"Secondary"} buttonType={ButtonType.Secondary} />
        <Button label={"Cancel"} buttonType={ButtonType.Cancel} />
        <Button label={"Success"} buttonType={ButtonType.Success} />
      </div>
      <h3>Bordered</h3>
      <div className="row-container">
        <Button label={"BSimple"} buttonType={ButtonType.Simple} bordered={true} />
        <Button label={"BPrimary"} buttonType={ButtonType.Primary} bordered={true} />
        <Button label={"BSecondary"} buttonType={ButtonType.Secondary} bordered={true} />
        <Button label={"BCancel"} buttonType={ButtonType.Cancel} bordered={true} />
        <Button label={"BSuccess"} buttonType={ButtonType.Success} bordered={true} />
      </div>
      <h3>Special</h3>
      <h5>With icon. Without movement effect. Without underline effect. Disabled</h5>
      <div className="row-container">
        <Button icon="camera" label={"Icon"} buttonType={ButtonType.Primary} />
        <Button icon="bomb" label={"Icon"} buttonType={ButtonType.Primary} iconAlignment={IconAlignment.End} />
        <Button label={"No movement"} buttonType={ButtonType.Primary} hoverMoveEffect={false} />
        <Button label={"No underline"} buttonType={ButtonType.Primary} hoverUnderlineEffect={false} />
        <Button disabled={true} label={"Disabled"} buttonType={ButtonType.Primary} />
      </div>
      <h1>Input Component</h1>
      <h5>Normal. Bordered. Error. Disabled. Success. Password</h5>
      <div className="row-container">
        <TextInput label={"First name"} placeholder={"This is a placeholder"} />
        <TextInput label={"Last name"} bordered={true} placeholder={"This is a placeholder"} />
        <TextInput label={"Error"} errorMessage={"This is not an error :)"} />
        <TextInput label={"Error"} bordered={true} errorMessage={"This is an error :("} />
        <TextInput label={"Disabled"} bordered={true} disabled={true} />
        <TextInput label={"Success"} success={true} />
        <TextInput label={"Password"} type={TextInputType.Password} bordered={true}/>
      </div>
      <h1>TextArea Component</h1>
      <h5>Normal. Bordered.</h5>
      <div className="row-container">
        <TextArea value={"Lorem Ipsum"} />
        <TextArea bordered={true} />
      </div>
      <h1>CheckBox Component</h1>
      <h5>Normal. TriState.</h5>
      <div className="row-container">
        <Checkbox label={"Normal Checkbox:"} />
        <Checkbox label={"TriState Checkbox:"} isTristate={true} />
      </div>
      <h1>Loader Component</h1>
      <h5>Circle. Triple Ball. Custom Image. Progress Line</h5>
      <div className="row-container">
        <Loader type={LoaderType.Circle} />
        <Loader color={LoaderColor.Primary} type={LoaderType.TripleBall}/>
        <Loader type={LoaderType.CustomImage} imageUrl={"https://image.flaticon.com/icons/png/512/146/146687.png"}/>
        <br/>
        <Loader type={LoaderType.ProgressLine}/>
        <br/>
        <Loader type={LoaderType.ProgressLine} color={LoaderColor.Secondary} />
      </div>
    </>
  );
}

export default Demo;
