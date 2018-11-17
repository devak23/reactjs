import React from 'react';
import States from './states-data';

class AddressForm extends React.Component {
    state = {
        data: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            country: '',
            county: '',
            zipcode: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('invoking parent\'s submit function')
        this.props.submit(this.state.data);
    }

    handleClear = (e) => {
        this.setState({
            data: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                country: '',
                county: '',
                zipcode: ''
            }
        });
    }

    render() {
        let { data } = this.state;

        //Object.keys(States).forEach((k) => console.log(k + '==>' + States[k]));
        //Object.keys(States).map((key, index) => console.log(key, index, States[key]))
        return (
            <form className='ui form'>
                <div className="ui segment">
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <input type="text" name="addressLine1" placeholder="Address Line 1" value={data.addressLine1} onChange={this.handleOnChange} />
                        </div>
                        <div className="sixteen wide column">
                            <input type="text" name="addressLine2" placeholder="Address Line 2" value={data.addressLine2} onChange={this.handleOnChange} />
                        </div>
                        <div className="four wide column">
                            <input type="text" name="city" placeholder="City" value={data.city} onChange={this.handleOnChange} />
                        </div>
                        <div className="four wide column">
                            <select className="ui dropdown" name="state" onChange={this.handleOnChange}>
                                {
                                    Object
                                        .keys(States)
                                        .map((key, index, label) => <option key={index} value={key}>{States[key]}</option>)
                                }
                            </select>
                        </div>
                        <div className="two wide column">
                            <input type="text" name="country" placeholder="Country" value={data.country} onChange={this.handleOnChange} />
                        </div>
                        <div className="three wide column">
                            <input type="text" name="county" placeholder="County" value={data.county} onChange={this.handleOnChange} />
                        </div>
                        <div className="two wide column">
                            <input type="text" name="zipcode" placeholder="zipcode" value={data.zipcode} onChange={this.handleOnChange} />
                        </div>
                        <div className="sixteen wide column"></div>
                    </div>
                    <div className="ui buttons">
                        <button className="ui right floated red button" onClick={this.handleSubmit}>Add</button>
                        <div className="or"></div>
                        <button className="ui right floated button" onClick={this.handleClear}>Clear</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddressForm;