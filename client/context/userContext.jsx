import axios from "axios";
import {createContext, useState,useEffect} from "react";

export const UserContext = createContext({});


export function UserContextProvider({children}){
 const [user, setUser]= useState (null);
 useEffect(() =>{
    if(!user){
        axios.get('/profile').then(({data})=>{
            setUser(data)
        })
    }
 }, [])
    return (
      <UserContext.Provider value={{user, setUser}}> 
        {children}
      </UserContext.Provider>  
    )
}

//line 17 we are using USercontext so we can manage the state throughout the 
//entire app.