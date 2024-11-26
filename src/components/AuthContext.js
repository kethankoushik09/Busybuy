import { createContext, useEffect, useState ,useContext} from "react";
import { auth } from "./firebaseinit";
import { onAuthStateChanged } from "firebase/auth";
import { setLogLevel } from "firebase/data-connect";
import { db } from "./firebaseinit";
import { addDoc, collection, setDoc,doc } from "firebase/firestore";

const AuthContext = createContext();


export function useValue(){
    const val = useContext(AuthContext);
    return val

}

export default function CustomAuthContext({children}){
    const [currentUser,SetcurrentUser] = useState(null);
    const [userLoggedIn,SetuserLoggedIn] = useState(false);
    const [loading,Setloading] = useState(true);
    function logout(){
        SetcurrentUser(null);
        SetuserLoggedIn(false);
        Setloading(true);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,intializeUser);
        return unsubscribe;
    },[])
    // async function cart_orders(uid) {
    //     const docRef = doc(collection(db,"cart",uid));
    //     await setDoc(docRef,{orders:[]});

        
    // }
    async function intializeUser(user) {
        Setloading(true);
        if(user){
            SetcurrentUser({...user})
            SetuserLoggedIn(true);
            // cart_orders(user.uid)
            
        }
        else{
            SetcurrentUser(null);
            SetuserLoggedIn(false);
        }
        Setloading(false);
        
    }
    return(
        <>
            <AuthContext.Provider value = {{currentUser,userLoggedIn,loading,Setloading,SetuserLoggedIn,logout}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}