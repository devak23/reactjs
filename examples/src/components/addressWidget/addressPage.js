import React from "react";
import AddressForm from "./addressForm";

export default class AddressPage extends React.Component {
  onSubmit = data => {
    window.console.log(data);
  };

  render() {
    return <AddressForm submit={this.onSubmit} />;
  }
}
