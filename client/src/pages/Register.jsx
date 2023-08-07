import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate =  useNavigate()
  const[data, setData] = useState(
    { name: '',
      email: ' ',
      password: ' ',

    }
  )

   const registerUser = async (e) => {
      e.preventDefault();
      const{name, email, password}= data
      try{
       const{data} = await axios.post('/register',{
        name,email, password
       })
       if (data.error){
        toast.error(data.error)
       }else{
        setData ({})
        toast.success('Login Succesful.Welcome!')
        navigate('/login')
       }
      }catch (error){
       console.log(error)
      }
   }


  return (
    <div> 
      <form onSubmit={registerUser}>
        <label>Name</label> 
        <input type='text' placeholder='enter name...' value ={data.name} onChange={(e)=> setData({...data,name:e.target.value})}/>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value ={data.email} onChange={(e)=> setData({...data,email:e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value ={data.password} onChange={(e)=> setData({...data,password:e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}




/* line  24 we will be targeting the name value within the state so that whenever 
someone adds their name into the input  react will know to re-render so that the name value
can be updated  and thats why we use the onchange function so any changes can be updated  Line 26
and Line 28 we will be doing the same thing anytime the user adds input into the password
or email field it will be updated*/