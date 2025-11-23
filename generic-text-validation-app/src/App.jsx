import './App.css'
import ValidatedTextBox from './components/ValidatedTextBox.jsx';
import { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const [formValid, setFormValid] = useState({
    name: false,
    age: false,
    username: false,
    email: false,
    password: false,
    phone: false,
  });

  const handleFieldChange = (field) => (value, isValid) => {
    setFormData(prev => ({...prev, [field]: value}))
    setFormValid(prev => ({...prev, [field]: isValid}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    const allValid = Object.values(formValid).every(valid => valid);
    if (allValid) {
      alert("Form submitted successfully" + JSON.stringify(formData, null, 2));
    } else {
      alert("Form contains invalid data. Please fix the errors and try again.");
    }
  }

  const isFormValid = Object.values(formValid).every(valid => valid)
    && Object.values(formData).every(datum => datum !== '');

  return (
    <>
      <h1>Validated Textbox</h1>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Generic Validation Form
          </h1>

          <form onSubmit={handleSubmit}>
            <ValidatedTextBox
              label="Full Name"
              validationType="alphaOnly"
              value={formData.name}
              onChange={handleFieldChange('name')}
              placeholder="Enter your full name"
              required
            />

            <ValidatedTextBox
              label="Age"
              validationType="number"
              value={formData.age}
              onChange={handleFieldChange('age')}
              placeholder="Enter your age"
              required
            />

            <ValidatedTextBox
              label="Username"
              validationType="alphanumeric"
              value={formData.username}
              onChange={handleFieldChange('username')}
              placeholder="Enter username (letters and numbers only)"
              required
            />

            <ValidatedTextBox
              label="Email"
              type="email"
              validationType="email"
              value={formData.email}
              onChange={handleFieldChange('email')}
              placeholder="Enter your email"
              required
            />

            <ValidatedTextBox
              label="Phone Number"
              validationType="phone"
              value={formData.phone}
              onChange={handleFieldChange('phone')}
              placeholder="Enter 10-digit phone number"
              required
            />

            <ValidatedTextBox
              label="Password"
              type="password"
              validationType="password"
              value={formData.password}
              onChange={handleFieldChange('password')}
              placeholder="At least 8 characters with letters and numbers"
              required
            />

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 px-4 rounded-md font-semibold text-white transition-colors ${
                isFormValid
                  ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Submit Form
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h3 className="font-semibold text-gray-700 mb-2">Validation Types:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><strong>alphaOnly:</strong> Only letters (A-Z, a-z)</li>
              <li><strong>number:</strong> Only numbers (0-9)</li>
              <li><strong>alphanumeric:</strong> Letters and numbers</li>
              <li><strong>email:</strong> Valid email format</li>
              <li><strong>phone:</strong> 10-digit phone number</li>
              <li><strong>password:</strong> Min 8 chars with letters & numbers</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
