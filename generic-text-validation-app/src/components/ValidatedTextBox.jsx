import React, { useState } from 'react';

const ValidatedTextBox = ({
                            label,
                            type = 'text',
                            validationType = 'text',
                            value,
                            onChange,
                            placeholder = '',
                            required = false
                          }) => {
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  // Validation patterns
  const validationRules = {
    text: {
      pattern: /.*/,
      message: ''
    },
    number: {
      pattern: /^[0-9]*$/,
      message: 'Only numbers are allowed'
    },
    alphanumeric: {
      pattern: /^[a-zA-Z0-9]*$/,
      message: 'Only letters and numbers are allowed'
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    phone: {
      pattern: /^[0-9]{10}$/,
      message: 'Please enter a valid 10-digit phone number'
    },
    alphaOnly: {
      pattern: /^[a-zA-Z]*$/,
      message: 'Only letters are allowed'
    },
    password: {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      message: 'Password must be at least 8 characters with letters and numbers'
    }
  };

  // Validate input
  const validateInput = (inputValue) => {
    const rule = validationRules[validationType];
    if (required && !inputValue) {
      return 'This is a required field';
    }

    if (inputValue && !rule?.pattern?.test(inputValue)) {
      return rule.message;
    }

    return '';
  };

  // Handle input change
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const validationError = validateInput(inputValue);
    setError(validationError);
    onChange(inputValue, !validationError)
  }

  // Handle input blur
  const handleBlur = () => {
    setTouched(true);
    const validationError = validateInput(value);
    setError(validationError);
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
          touched && error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-500'
        }`}
      />
      {touched && error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
};

export default ValidatedTextBox;