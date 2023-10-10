import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";


export const AuthContext = createContext(null)


const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)

    const CreateUser = (email, password) => {
        setLoading(true)
return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

const LogOut = () => {
    setLoading(true)
    return signOut(auth)
}


    useEffect(() => {
const UnScribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
    setLoading(false)
})
return() => {
    UnScribe
}

    },[])

const AuthInfo = {
user,
loading, 
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