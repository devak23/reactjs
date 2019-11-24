import React, { useState, useEffect, useRef } from 'react';
import { DatePicker, message, Input } from 'antd';


const DatePickerTest = () => {
  const inputRef = useRef();
  const [value, setValue] = useState('');
  const [date, setDate] = useState(null);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('This runs after the first render. So the ref is already set');
    inputRef.current.focus();
  }, [inputRef]);

  useEffect(() => {
    console.log(`[Text Listener]: You changed the text to: ${text}`);
  }, [text]);

  useEffect(() => {
    console.log(`[Date Listener]: You changed the date to: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
  }, [date]);

  const handleDateChange = (date) => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`, 2);
    setDate(date);
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <DatePicker onChange={handleDateChange} />
      <div style={{ marginTop: '1rem' }}>
        You selected: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Input
          ref={inputRef}
          placeholder='This field should have the cursor when page loads'
          value={value}
          onChange={e => setValue(e.target.value)} />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Input placeholder='Input something here' onChange={handleOnChange} />
      </div>
    </div>
  )
}

export default DatePickerTest;