import axios from "axios";
import {createContext, useState,useEffect} from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}){

    return (
      <UserContext.Provider value={}>
        {children}
      </UserContext.Provider>  
    )
}