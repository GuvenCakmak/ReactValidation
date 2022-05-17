import React from 'react'
import { useNavigate } from "react-router-dom";



function SignedIn() {
  const navigate = useNavigate();
  const signOutHandler = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>SignedIn</h1>
      <button onClick={signOutHandler}>Sign out</button>
    </div>
  )
}

export default SignedIn