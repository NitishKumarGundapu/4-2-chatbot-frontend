import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate()
  return(
    <>
    <div>Home Page</div>
    <button onClick={() => navigate('chatbot')}>Signin</button>
    </>
  );
}
