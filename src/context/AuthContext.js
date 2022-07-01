import { createContext, useContext } from "react";

export const userLoginContext = createContext({
    user:null,
    logIn:()=>{},
    logOut:()=>{}
});

export function useUserSession(){
    const {user, logIn,logOut}=useContext(userLoginContext) 
    return {user,logIn,logOut};
}