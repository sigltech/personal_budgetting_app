import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page403() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page403</h1>
      <p onClick={() => navigate('/')}>Please go back to the home page</p>
    </div>
  )
}
