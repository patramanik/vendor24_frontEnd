import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import UserOne from '../../images/user/user_icon.png';

const UserSinginButten = () => {
  
  return (
    <div className="relative">
    <Link
      className="flex items-center gap-4"
      to="#"
    >
      <span className="h-12 w-12 rounded-full">
        <img src={UserOne} alt="User" />
      </span>
    </Link>
  </div>
  );
};

export default UserSinginButten;
