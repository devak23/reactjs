import * as React from "react";
import PropTypes from "prop-types";
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
  const handleOkClick = () => {
    props.onOkClick();
  };

  const handleCancelClick = () => {
    props.onCancelClick();
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
              {cancelCaption}
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
