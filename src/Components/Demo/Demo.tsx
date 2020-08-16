import * as React from 'react';
import Button, { ButtonType } from '../Button/Button';
import "./Demo.scss";

export const Demo = () => {
  return (
    <>
      <div className="row-container">
        <Button label={"Sign Up"} bordered={true}/>
        <Button label={"Check Out"} buttonType={ButtonType.Secondary} bordered={true} disabled={true}/>
        <Button label={"Cancel"} buttonType={ButtonType.Cancel} bordered={true} disabled={true}/>
      </div>
      <div className="row-container">
        <Button label={"Next Step"} disabled={true}/>
        <Button label={"Download"} buttonType={ButtonType.Secondary} disabled={true}/>
        <Button label={"Cancel"} buttonType={ButtonType.Cancel} disabled={true}/>
      </div>
    </>
  );
}

export default Demo;
