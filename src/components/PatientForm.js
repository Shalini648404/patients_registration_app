import React, { useState } from 'react';
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

export default PatientForm;