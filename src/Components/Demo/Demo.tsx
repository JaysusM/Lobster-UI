import * as React from 'react';
import Button, { ButtonType } from '../Button/Button';
import "./Demo.scss";
import TextInput from '../TextInput/TextInput';

export const Demo = () => {
  return (
    <>
      <div className="row-container">
        <Button label={"Sign Up"} bordered={true} />
        <Button label={"Check Out"} buttonType={ButtonType.Secondary} bordered={true} />
        <Button label={"Cancel"} buttonType={ButtonType.Cancel} bordered={true} />
      </div>
      <div className="row-container">
        <Button label={"Next Step"} />
        <Button label={"Download"} buttonType={ButtonType.Secondary} />
        <Button label={"Cancel"} buttonType={ButtonType.Cancel} />
      </div>
      <div className="row-container">
        <TextInput label={"First name"} placeholder={"This is a placeholder"} disabled={true}/>
        <TextInput label={"Last nameLast nameLast nameLast nameLast nameLast nameLast nameLast nameLast nameLast nameLast name"} bordered={true} placeholder={"This is a placeholder"} />
      </div>
    </>
  );
}

export default Demo;
