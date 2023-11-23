import { createContext, useState,useEffect } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth} from "../utils/Firebase/Firebase.utils";

export const Usercontext= createContext({
    currentUser: null,
    SetcurrentUser: ()=> null,
})

export const UserProvider =({children})=>{
    const [currentUser,SetcurrentUser]=useState(null)
   
    const value={
        currentUser,SetcurrentUser

    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        SetcurrentUser(user)
        })

        return unsubscribe
        
    },[])
    return(
        <Usercontext.Provider value={value}>{children}</Usercontext.Provider>
    )
}
