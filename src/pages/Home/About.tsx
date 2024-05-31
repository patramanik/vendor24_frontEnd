import React, { useState } from 'react';
import PopupLogin from '../../components/Popup/Popup';
const About: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={handleLoginClick}>Login</button>
      {isLoginOpen && <PopupLogin onClose={handleCloseLogin} />}
    </div>
  );
};

export default About;
