import * as React from 'react';
import Button, { ButtonType, IconAlignment, ButtonColor } from '../Button/Button';
import "./Demo.scss";
import TextInput, { TextInputType } from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import Checkbox from '../Checkbox/Checkbox';
import Loader, { LoaderColor, LoaderType } from '../Loader/Loader';
import Skeleton, { SkeletonType, SkeletonAnimation } from '../Skeleton/Skeleton';
import BaseCard, { BaseCardType } from '../BaseCard/BaseCard';
import NavBar, { NavBarColor } from '../NavBar/NavBar';
import NavbBarMenu from '../NavBar/NavBarMenu/NavBarMenu';
import Toast, { ToastType } from '../Toast/Toast';
import ModalToast from '../Toast/ModalToast/ModalToast';
import { useState } from 'react';
import ListItem from '../ListItem/ListItem';

export const Demo = () => {
  const [showModalToast, setShowModalToast] = useState<boolean>(false);

  const skeleton = (animation?: SkeletonAnimation): JSX.Element => <div className="column-container">
    <div className="row-container">
      <Skeleton type={SkeletonType.Circular} animation={animation} height={50} width={50} />
      <div style={{ width: "15px" }} />
      <div className="expanded-center">
        <Skeleton type={SkeletonType.Text} animation={animation} width={200} />
      </div>
    </div>
    <br />
    <Skeleton type={SkeletonType.Custom} animation={animation} width={265} height={200} />
  </div>;

  return (
    <div className="lobster-demo">
      <h1>Button Component</h1>
      <h3>Normal</h3>
      <div className="row-container">
        <Button label={"Simple"} type={ButtonType.Simple} />
        <Button label={"Primary"} color={ButtonColor.Primary} />
        <Button label={"Secondary"} color={ButtonColor.Secondary} />
        <Button label={"Cancel"} color={ButtonColor.Cancel} />
        <Button label={"Success"} color={ButtonColor.Success} />
      </div>
      <h3>Bordered</h3>
      <div className="row-container">
        <Button label={"BPrimary"} color={ButtonColor.Primary} bordered={true} />
        <Button label={"BSecondary"} color={ButtonColor.Secondary} bordered={true} />
        <Button label={"BCancel"} color={ButtonColor.Cancel} bordered={true} />
        <Button label={"BSuccess"} color={ButtonColor.Success} bordered={true} />
      </div>
      <h3>Special</h3>
      <h5>With icon. Without movement effect. Without underline effect. Disabled</h5>
      <div className="row-container">
        <Button icon="camera" label={"Icon"} color={ButtonColor.Primary} />
        <Button icon="bomb" label={"Icon"} color={ButtonColor.Primary} iconAlignment={IconAlignment.End} />
        <Button label={"No movement"} color={ButtonColor.Primary} hoverMoveEffect={false} />
        <Button label={"No underline"} color={ButtonColor.Primary} hoverUnderlineEffect={false} />
        <Button disabled={true} label={"Disabled"} color={ButtonColor.Primary} />
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
        <TextInput label={"Password"} type={TextInputType.Password} bordered={true} />
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
        <Loader color={LoaderColor.Primary} type={LoaderType.TripleBall} />
        <Loader type={LoaderType.CustomImage} imageUrl={"https://image.flaticon.com/icons/png/512/146/146687.png"} />
        <br />
        <Loader type={LoaderType.ProgressLine} />
        <br />
        <Loader type={LoaderType.ProgressLine} color={LoaderColor.Secondary} />
      </div>
      <h1>Skeleton Component</h1>
      <h5>Circular. Text. Custom.</h5>
      <h5>Blink Animation. Wave Animation</h5>
      <div className="row-container">
        {skeleton(SkeletonAnimation.Blink)}
        <div style={{width: "50px"}} />
        {skeleton(SkeletonAnimation.Wave)}
      </div>
      <h1>BaseCard Component</h1>
      <h5>Light. Dark.</h5>
      <div className="row-container">
        <BaseCard type={BaseCardType.Light}>
          {skeleton()}
        </BaseCard>
        <div style={{ width: "15px" }} />
        <BaseCard type={BaseCardType.Dark}>
          {skeleton()}
        </BaseCard>
      </div>
      <h1>NavBar Component</h1>
      <h3>With NavBarMenu</h3>
      <h5>Horizontal Primary. Horizontal Secondary.</h5>
      <div className="relative-container no-margin no-padding">
        <NavBar>
          <h3>Lobster UI</h3>
          <NavbBarMenu options={["Home", "Books", "Help"]} />
        </NavBar>
        <NavBar color={NavBarColor.Secondary}>
          <h3>Lobster UI</h3>
          <NavbBarMenu options={["Home", "Books", "Help"]} color={ButtonColor.Primary} />
        </NavBar>
      </div>
      <h1>Toast</h1>
      <h5>Information. Warning. Success. Error. Special Icon.</h5>
      <div className="column-container">
        <Toast title="We are moving to other domain" subtitle="You can keep visiting us at google.com" type={ToastType.Information} />
        <div style={{ height: "10px" }} />
        <Toast title="Payment received" subtitle="We received the payment. Check your mail." type={ToastType.Success} />
        <div style={{ height: "10px" }} />
        <Toast title="Account suspended" subtitle="Look like you're account is suspended. Contact our support team." type={ToastType.Warning} />
        <div style={{ height: "10px" }} />
        <Toast title="Payment unsuccessful" subtitle="Try using another payment method, please." type={ToastType.Error} />
        <div style={{ height: "10px" }} />
        <Toast title="Special Icon" subtitle="This toast uses an special icon" type={ToastType.Error} specialIcon="react" />
      </div>
      <h1>Modal Toast</h1>
      <div className="row-container">
        <Button onClick={() => setShowModalToast(true)} type={ButtonType.Normal} label="Show modal" />
        {showModalToast && <ModalToast title="Modal Toast Notification" subtitle="This is a modal toast element, it will disappear in a few seconds or when cancel button is pressed" type={ToastType.Success} duration={5000} onDispose={() => setShowModalToast(false)} />}
      </div>
      <h1>List Item</h1>
      <div className="row-container">
        <div className="column-container">
          <ListItem label={"Pay with Amazon"} icon="amazon-pay" />
          <ListItem label={"Demo video"} icon="video" />
          <ListItem label={"React Components"} icon="react" />
          <ListItem label={"Contact us"} />
        </div>
      </div>
    </div>
  );
}

export default Demo;
