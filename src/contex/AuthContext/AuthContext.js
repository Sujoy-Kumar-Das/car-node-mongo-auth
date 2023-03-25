import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/Firebase.init';
export const AuthContextProvider = createContext()
const auth = getAuth(app)
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })

        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        loginUser
       
    }
    return (
        <AuthContextProvider.Provider value={authInfo}>
            {children}
        </AuthContextProvider.Provider>
    );
};

export default AuthContext;