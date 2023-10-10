import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";


export const AuthContext = createContext(null)


const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)

    const CreateUser = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

const LogOut = () => {
    return signOut(auth)
}


    useEffect(() => {
const UnScribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
})
return() => {
    UnScribe
}

    },[])

const AuthInfo = {
user, 
CreateUser,
signIn,
LogOut

}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;