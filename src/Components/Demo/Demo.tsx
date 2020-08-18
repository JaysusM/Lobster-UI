import * as React from 'react';
import Button, { ButtonType } from '../Button/Button';
import "./Demo.scss";
import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';

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
        <Button label={"BSimple"} buttonType={ButtonType.Simple} bordered={true}/>
        <Button label={"BPrimary"} buttonType={ButtonType.Primary} bordered={true}/>
        <Button label={"BSecondary"} buttonType={ButtonType.Secondary} bordered={true}/>
        <Button label={"BCancel"} buttonType={ButtonType.Cancel} bordered={true}/>
        <Button label={"BSuccess"} buttonType={ButtonType.Success} bordered={true}/>
      </div>
      <h3>Special</h3>
      <h5>With icon. Without movement effect. Without underline effect.</h5>
      <div className="row-container">
        <Button icon="camera" label={"Icon"} buttonType={ButtonType.Primary}/>
        <Button label={"No movement"} buttonType={ButtonType.Primary} hoverMoveEffect={false}/>
        <Button label={"No underline"} buttonType={ButtonType.Primary} hoverUnderlineEffect={false}/>
      </div>
      <h3>Input</h3>
      <h5>Normal. Bordered.</h5>
      <div className="row-container">
        <TextInput label={"First name"} placeholder={"This is a placeholder"} />
        <TextInput label={"Last name"} bordered={true} placeholder={"This is a placeholder"} />
      </div>
      <h3>Text Area</h3>
      <h5>Normal. Bordered.</h5>
      <div className="row-container">
        <TextArea value={"Lorem Ipsum"}/>
        <TextArea bordered={true} />
      </div>
    </>
  );
}

export default Demo;
