// containers/SignupContainer.tsx
import React from 'react';
import SignupForm from '../pages/Authentication/SignUp.tsx';
import User from '../models/User.ts';
import { signup } from '../services/authService.ts';

const SignupContainer: React.FC = () => {
  const handleSignup = async (user: User) => {
    try {
      await signup(user);
      alert('Signup successful!');
    } catch (error) {
      alert('Signup failed. Please try again.');
    }
  };

  return <SignupForm onSubmit={handleSignup} />;
};

export default SignupContainer;
