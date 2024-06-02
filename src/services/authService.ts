
import axios from 'axios';
import User from '../models/User';

const signup = async (user: User): Promise<void> => {
  try {
    console.log(user);
    
    const response = await axios.post('http://localhost:8001/api/v1/auth/signup', user, {
      headers: {
        'Content-Type': 'application/json',
      },
       
    });
    
    if (response.status !== 200) {
      throw new Error('Signup failed');
    }
  } catch (error) {
    throw new Error('Signup failed');
  }
};

export { signup };









// // services/authService.ts
// import User from '../models/User';

// const signup = async (user: User): Promise<void> => {
//   // Example API call to sign up user
//   const response = await fetch('http://localhost:8001/api/v1/auth/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });

//   if (!response.ok) {
//     throw new Error('Signup failed');
//   }
// };

// export { signup };
