import React from 'react'
import { useState } from 'react'




export default function login() {
  const [data, setData] = useState({
    email: '',
    password: '',

  })


  const loginUser = (e) => {
    e.preventDefault()

  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='enter email...' />
        <label>Password</label>
        <input type='password' placeholder='enter password...' />
        <button type='submit'>Login</button>
      </form>

    </div>
  )
}
