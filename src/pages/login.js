import React from 'react';
import Link from 'next/link';
import LoginForm from '../components/LoginForm.js';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <p>
        Don't have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;