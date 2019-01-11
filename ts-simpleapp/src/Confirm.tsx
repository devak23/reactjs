import * as React from "react";
import PropTypes from "prop-types";
import "./Confirm.css";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}
class Confirm extends React.Component<IProps> {
  public static defaultProps = {
    cancelCaption: "No way Jose!",
    okCaption: "Alrighty!"
  };

  private handleOkClick = () => {
    this.props.onOkClick();
  };

  private handleCancelClick = () => {
    this.props.onCancelClick();
  };

  public render() {
    const { title, content, okCaption, cancelCaption } = this.props;
    return (
      <div className={open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"}>
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{title}</span>
          </div>
          <div className="confirm-content-container">
            <p>{content}</p>
            <div className="confirm-buttons-container">
              <button className="confirm-cancel" onClick={this.handleCancelClick}>
                {cancelCaption}
              </button>
              <button className="confirm-ok" onClick={this.handleOkClick}>
                {okCaption}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
