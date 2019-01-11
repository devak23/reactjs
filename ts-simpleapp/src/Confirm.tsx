import * as React from "react";
import PropTypes from "prop-types";
import "./Confirm.css";

class Confirm extends React.Component<IProps> {
  public static defaultProps = {
    cancelCaption: "No way Jose!",
    okCaption: "Alrighty!"
  };

  public render() {
    const { title, content, okCaption, cancelCaption } = this.props;
    return (
      <div className="confirm-wrapper confirm-visible">
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{title}</span>
          </div>
          <div className="confirm-content-container">
            <p>{content}</p>
            <button className="confirm-cancel">{cancelCaption}</button>
            <button className="confirm-ok">{okCaption}</button>
          </div>
        </div>
      </div>
    );
  }
}

interface IProps {
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
}
export default Confirm;
