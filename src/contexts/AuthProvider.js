import {useState} from 'react';
import {login} from "../api";
import AuthContext from "./AuthContext";
const AuthProvider = ({children})=>{
    const [isLoggedIn, setLoggedIn] = useState(()=>{
        return  !!localStorage.getItem("userInfo");
    });
    const [userInfo, setUserInfo] = useState(()=>{
        const userFromStorage = localStorage.getItem("userInfo");
        if (userFromStorage) {
            return JSON.parse(userFromStorage);
        }
        return null;
    });
    const loginUser = async (credential) =>{
        const user = await login(credential)
        setUserInfo(user);
        setLoggedIn(true);
        localStorage.setItem("userInfo",JSON.stringify(user));

    }
    const logoutUser = ()=>{
        setUserInfo(null);
        setLoggedIn(false);
        localStorage.removeItem("userInfo");
    }
    return (
        <AuthContext.Provider value={{userInfo, isLoggedIn,loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;