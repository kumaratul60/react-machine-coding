
import  { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Email is not valid';
    }

    if (!password) {
      formErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(formErrors).length === 0) {
      // Form is valid
      alert('Form submitted');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
