import * as React from 'react';
import Button from '../Button/Button';
import "./Demo.scss";
import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import Checkbox from '../Checkbox/Checkbox';
import Loader from '../Loader/Loader';
import Skeleton, { SkeletonAnimation } from '../Skeleton/Skeleton';
import "./Demo.scss";
import BaseCard from '../BaseCard/BaseCard';
import NavBar from '../NavBar/NavBar';
import NavbBarMenu from '../NavBar/NavBarMenu/NavBarMenu';
import Toast from '../Toast/Toast';
import ModalToast from '../Toast/ModalToast/ModalToast';
import { useState } from 'react';
import ListItem from '../ListItem/ListItem';
import Radio from '../RadioGroup/Radio/Radio';
import RadioGroup from '../RadioGroup/RadioGroup';
import Switch from '../Switch/Switch';
import Chip from '../Chip/Chip';

export const Demo = () => {
  const [showModalToast, setShowModalToast] = useState<boolean>(false);

  const skeleton = (animation?: SkeletonAnimation): JSX.Element => <div className="column-container">
    <div className="row-container">
      <Skeleton type={"circular"} animation={animation} height={50} width={50} />
      <div style={{ width: "15px" }} />
      <div className="expanded-center">
        <Skeleton type={"text"} animation={animation} width={200} />
      </div>
    </div>
    <br />
    <Skeleton type={"custom"} animation={animation} width={265} height={200} />
  </div>;

  return (
    <div className="lobster-demo">
      <h1>Button Component</h1>
      <h3>Normal</h3>
      <div className="row-container">
        <Button label={"Simple"} type={"simple"} />
        <Button label={"Primary"} color={"primary"} />
        <Button label={"Secondary"} color={"secondary"} />
        <Button label={"Cancel"} color={"cancel"} />
        <Button label={"Success"} color={"success"} />
      </div>
      <h3>Bordered</h3>
      <div className="row-container">
        <Button label={"BPrimary"} color={"primary"} bordered={true} />
        <Button label={"BSecondary"} color={"secondary"} bordered={true} />
        <Button label={"BCancel"} color={"cancel"} bordered={true} />
        <Button label={"BSuccess"} color={"success"} bordered={true} />
      </div>
      <h3>Special</h3>
      <h5>With icon. Without movement effect. Without underline effect. Disabled</h5>
      <div className="row-container">
        <Button icon="camera" label={"Icon"} color={"primary"} />
        <Button icon="bomb" label={"Icon"} color={"primary"} iconAlignment={"end"} />
        <Button label={"No movement"} color={"primary"} hoverMoveEffect={false} />
        <Button label={"No underline"} color={"primary"} hoverUnderlineEffect={false} />
        <Button disabled={true} label={"Disabled"} color={"primary"} />
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
        <TextInput label={"Password"} type={"password"} bordered={true} />
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
        <Checkbox label={"Normal Checkbox:"} onCheckboxChanged={(value) => console.log("Normal checkbox value: " + value)} />
        <Checkbox label={"TriState Checkbox:"} isTristate={true} onCheckboxChanged={(value) => console.log("TriState checkbox value: " + value)} />
      </div>
      <h1>Radio Group - Radio Component</h1>
      <h5>Normal</h5>
      <div className="row-container">
        <div className="column-container">
          <RadioGroup options={[
            {
              label: "First Option: ",
              value: "Option1"
            },
            {
              label: "Second Option: ",
              value: "Option2"
            },
            {
              label: "Third Option: ",
              value: "Option3"
            }
          ]} onRadioChanged={value => console.log("RadioGroup value: " + value)} />
          <Radio label={"Radio Button:"} value="RadioDefault" onRadioChanged={value => console.log("Normal Radio value: " + value)} />
        </div>
      </div>
      <h1>Loader Component</h1>
      <h5>Circle. Triple Ball. Custom Image. Progress Line</h5>
      <div className="row-container">
        <Loader type={"circle"} />
        <Loader color={"primary"} type={"triple-ball"} />
        <Loader type={"custom-image"} imageUrl={"https://i.imgur.com/NVeYmf3.png"} />
        <br />
        <Loader type={"progress-line"} />
        <br />
        <Loader type={"progress-line"} color={"secondary"} />
      </div>
      <h1>Skeleton Component</h1>
      <h5>Circular. Text. Custom.</h5>
      <h5>Blink Animation. Wave Animation</h5>
      <div className="row-container">
        {skeleton("blink")}
        <div style={{ width: "50px" }} />
        {skeleton("wave")}
      </div>
      <h1>BaseCard Component</h1>
      <h5>Light. Dark.</h5>
      <div className="row-container">
        <BaseCard type={"light"}>
          {skeleton()}
        </BaseCard>
        <div style={{ width: "15px" }} />
        <BaseCard type={"dark"}>
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
        <NavBar color={"secondary"}>
          <h3>Lobster UI</h3>
          <NavbBarMenu options={["Home", "Books", "Help"]} color={"primary"} />
        </NavBar>
      </div>
      <h1>Toast</h1>
      <h5>Information. Warning. Success. Error. Special Icon.</h5>
      <div className="column-container">
        <Toast title="We are moving to other domain" subtitle="You can keep visiting us at google.com" type={"information"} />
        <div style={{ height: "10px" }} />
        <Toast title="Payment received" subtitle="We received the payment. Check your mail." type={"success"} />
        <div style={{ height: "10px" }} />
        <Toast title="Account suspended" subtitle="Look like you're account is suspended. Contact our support team." type={"warning"} />
        <div style={{ height: "10px" }} />
        <Toast title="Payment unsuccessful" subtitle="Try using another payment method, please." type={"error"} />
        <div style={{ height: "10px" }} />
        <Toast title="Special Icon" subtitle="This toast uses an special icon" type={"error"} specialIcon="react" />
      </div>
      <h1>Modal Toast</h1>
      <div className="row-container">
        <Button onClick={() => setShowModalToast(true)} type={"normal"} label="Show modal" />
        {showModalToast && <ModalToast title="Modal Toast Notification" subtitle="This is a modal toast element, it will disappear in a few seconds or when cancel button is pressed" type={"success"} duration={5000} onDispose={() => setShowModalToast(false)} />}
      </div>
      <h1>List Item</h1>
      <div className="row-container">
        <div className="column-container">
          <ListItem label={"Pay with Amazon"} icon="amazon-pay" />
          <ListItem label={"Demo video"} icon="video">
            <ListItem label={"Option 1"} icon="angellist" />
            <ListItem label={"Option 2"} icon="amilia">
              <ListItem label={"Option 2.1"} icon="alarm-clock" />
            </ListItem>
          </ListItem>
          <ListItem label={"React Components"} icon="react" />
          <ListItem label={"Contact us"} />
        </div>
      </div>
      <h1>Switch Component</h1>
      <h5>Rounded. Squared. Primary. Secondary. Cancel. Success</h5>
      <div className="column-container">
        <div className="row-container">
          <Switch type={"rounded"} />
          <Switch type={"rounded"} color={"secondary"} />
          <Switch type={"rounded"} color={"cancel"} />
          <Switch type={"rounded"} color={"success"} />
        </div>
        <div className="row-container">
          <Switch type={"squared"} />
          <Switch type={"squared"} color={"secondary"} />
          <Switch type={"squared"} color={"cancel"} />
          <Switch type={"squared"} color={"success"} />
        </div>
        <div className="row-container">
          <Switch type={"line"} />
          <Switch type={"line"} color={"secondary"} />
          <Switch type={"line"} color={"cancel"} />
          <Switch type={"line"} color={"success"} />
        </div>
        <div className="row-container">
          <Switch type={"squared"} unselectedIcon="far bell-slash" selectedIcon="far bell" />
          <Switch type={"rounded"} color={"secondary"} unselectedIcon="far moon" selectedIcon="far sun" />
          <Switch type={"line"} color={"cancel"} unselectedIcon="frog" selectedIcon="horse" />
          <Switch type={"rounded"} color={"success"} unselectedIcon="bomb" selectedIcon="cloud-meatball" />
        </div>
      </div>
      <h1>Chip Component</h1>
      <div className="column-container">
        <div className="row-container">
          <Chip label="React" color="primary"/>
          <div style={{width: "15px"}} />
          <Chip label="React" color="secondary"/>
          <div style={{width: "15px"}} />
          <Chip label="React" color="cancel"/>
          <div style={{width: "15px"}} />
          <Chip label="React" color="success"/>
        </div>
        <div style={{height: "15px"}} />
        <div className="row-container">
          <Chip label="React" color="primary" bordered={true}/>
          <div style={{width: "15px"}} />
          <Chip label="React" color="secondary" bordered={true}/>
          <div style={{width: "15px"}} />
          <Chip label="React" color="cancel" bordered={true}/>
          <div style={{width: "15px"}} />
          <Chip label="React" color="success" bordered={true}/>
        </div>
        <div style={{height: "15px"}} />
        <div className="row-container">
          <Chip label="React" color="primary" icon="react" bordered={true}/>
          <div style={{width: "15px"}} />
          <Chip label="React" color="secondary" icon="basketball-ball" bordered={true}/>
          <div style={{width: "15px"}} />
          <Chip label="React" color="cancel" icon="baseball-ball" bordered={true}/>
          <div style={{width: "15px"}} />
          <Chip label="React" color="success" icon="bolt" bordered={true}/>
        </div>
      </div>
    </div>
  );
}

export default Demo;
