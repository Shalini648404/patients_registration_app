/*import React, { useState } from 'react';
import db from '../db';
import './PatientForm.css';
import { motion } from 'framer-motion';

function PatientForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
  });
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.exec(`
      INSERT INTO patients (name, age, gender, contact)
      VALUES ('${form.name}', ${form.age}, '${form.gender}', '${form.contact}')
    `);

    setForm({ name: '', age: '', gender: '', contact: '' });
    setSuccessMsg('✅ Patient registered successfully!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <motion.div
      className="form-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
        <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required />
        <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="submit-btn"
        >
          Register
        </motion.button>
      </form>
      {successMsg && <motion.div className="success-msg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{successMsg}</motion.div>}
    </motion.div>
  );
}

export default PatientForm;*/

import React, { useState } from 'react';
import db from '../db';
import './PatientForm.css';
import { motion } from 'framer-motion';

function PatientForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    countryCode: '+91',  // Default to India country code
    contact: '',
  });
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that the contact number is exactly 10 digits
    if (form.contact.length !== 10 || isNaN(form.contact)) {
      setSuccessMsg('❌ Contact number must be 10 digits.');
      setTimeout(() => setSuccessMsg(''), 3000);
      return;
    }

    await db.exec(`
      INSERT INTO patients (name, age, gender, contact)
      VALUES ('${form.name}', ${form.age}, '${form.gender}', '${form.countryCode}${form.contact}')
    `);

    setForm({ name: '', age: '', gender: '', countryCode: '+1', contact: '' });
    setSuccessMsg('✅ Patient registered successfully!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <motion.div
      className="form-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
        
        {/* Gender Dropdown */}
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>

    

<div className="phone-group">
  <select
    name="countryCode"
    value={form.countryCode}
    onChange={handleChange}
    required
  >
    <option value="" disabled hidden>Code</option>
    <option value="+1">+1 (US)</option>
    <option value="+91">+91 (India)</option>
    <option value="+44">+44 (UK)</option>
    <option value="+61">+61 (Australia)</option>
  <option value="+81">+81 (Japan)</option>
  <option value="+49">+49 (Germany)</option>
  <option value="+33">+33 (France)</option>
  <option value="+86">+86 (China)</option>
  <option value="+55">+55 (Brazil)</option>
  <option value="+34">+34 (Spain)</option>
  <option value="+7">+7 (Russia)</option>
  <option value="+27">+27 (South Africa)</option>
  <option value="+82">+82 (South Korea)</option>
  <option value="+39">+39 (Italy)</option>
  <option value="+974">+974 (Qatar)</option>
  </select>
    

    <input
    name="contact"
    type="tel"
    placeholder="Phone Number"
    pattern="[0-9]{10}"
    value={form.contact}
    onChange={(e) => {
        const onlyNums = e.target.value.replace(/\D/g, ''); // remove non-digits
        setForm((prev) => ({ ...prev, contact: onlyNums }));
    }}
    onInvalid={(e) => {
        e.target.setCustomValidity("Please enter a valid 10-digit phone number.");
    }}
    onInput={(e) => {
        e.target.setCustomValidity(""); // Clear again on new input
    }}
    required
    />


    </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="submit-btn"
        >
          Register
        </motion.button>
      </form>

      {successMsg && <motion.div className="success-msg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{successMsg}</motion.div>}
    </motion.div>
  );
}

export default PatientForm;
