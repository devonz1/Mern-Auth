import React from 'react'

export default function Register() {

   const registerUser = (e) => {
      e.preventDefault()
   }


  return (
    <div> 
      <form onSubmit={registerUser}>
        <label>Name</label> 
        <input type='name' placeholder='enter name...'/>
        <label>Email</label>
        <input type='email' placeholder='enter email...'/>
        <label>Password</label>
        <input type='password' placeholder='enter password...'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


