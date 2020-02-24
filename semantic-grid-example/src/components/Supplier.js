import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react'

const Supplier = ({ submit }) => {
  const [data, setData] = useState({
    name: '',
    address: ''
  });

  const handleOnChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleOnClick = (e) => {
    // validate the state object
    let isValid = validate();
    if (isValid) {
      submit(data);
    }
  }

  const validate = () => true;

  return (
    <div>
      <Input placeholder='Name...' name='name' onChange={handleOnChange} />
      <Input placeholder='Address...' name='address' onChange={handleOnChange} />
      <Button onClick={handleOnClick}>Submit</Button>
    </div>
  );
}

export default Supplier;