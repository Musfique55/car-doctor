import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const googleAuth = new GoogleAuthProvider();
    const facebookAuth = new FacebookAuthProvider();
    const [user,setUser] = useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth,googleAuth);
    }

    const fbLogin = () => {
        return signInWithPopup(auth,facebookAuth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    },[])
    const userInfo = {createUser,loginUser,googleLogin,fbLogin,user}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node.isRequired
}
export default AuthProvider;