import React, { useEffect, useState } from "react";
import "./Confirm.css";

interface ConfirmProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

const Confirm: React.SFC<ConfirmProps> = props => {
  const [cancelClickCount, setCancelClickCount] = useState(0);
  // React.useState() is a React function that lets us create state, passing in a default
  // value as a parameter. We use 0 as the value for the default parameter.

  // The useState() returns 2 elements. The first element is the current value of the state and
  // the second element contains a function to set state to a different value

  // We destructure the first element into cancelClickCount and second one into setCancelClickCount
  // The rest of the function can cancel the click count via cancelClickCount. The function is also
  // able to increment the cancel click count via setCancelClickCount.

  useEffect(() => {
    console.log("Confirm first rendering");
  }, []);
  // useEffect hooks into component's life cycle and executes when the component is first rendered.
  // The function takes second parameter that determines when is our arrow function invoked. The param
  // is an array of values that, when changed, will cause the arrow function to be invoked. In our
  // case, we are passing an empty array which indicates, our arrow function will never be called
  // after its first render.

  const handleOkClick = () => {
    props.onOkClick();
  };

  const handleCancelClick = () => {
    const newCount = cancelClickCount + 1;
    setCancelClickCount(newCount);
    if (cancelClickCount >= 1) {
      props.onCancelClick();
      setCancelClickCount(0);
    }
  };

  const { title, content, okCaption, cancelCaption, open } = props;
  return (
    <div
      className={open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"}
    >
      <div className="confirm-container">
        <div className="confirm-title-container">
          <span>{title}</span>
        </div>
        <div className="confirm-content-container">
          <p>{content}</p>
          <div className="confirm-buttons-container">
            <button className="confirm-cancel" onClick={handleCancelClick}>
              {cancelClickCount === 0 ? cancelCaption : "Really ??"}
            </button>
            <button className="confirm-ok" onClick={handleOkClick}>
              {okCaption}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Confirm.defaultProps = {
  cancelCaption: "No way Jose!",
  okCaption: "Alrighty!"
};

export default Confirm;
