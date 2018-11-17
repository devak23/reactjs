import React from 'react';
import AddressForm from './addressForm';

class AddressPage extends React.Component {
    onSubmit = (data) => {
        console.log(data);
    }

    render() {
        return (
            <AddressForm submit={this.onSubmit} />
        );
    }
}

export default AddressPage;