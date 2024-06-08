import React from 'react';
import Link from 'next/link';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;