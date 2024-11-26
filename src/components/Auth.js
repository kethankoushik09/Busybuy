import { auth } from "./firebaseinit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "./firebaseinit";
export async function SignUppage(username, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, username, password);
        console.log("User signed up successfully");
        cart_orders(userCredential.user.uid);
        toast.success("Signup successfully!");
        return true;
    } catch (error) {
        console.error(error);
        toast.error("Signup failed: Invalid data");
        return false;
    }
}

export async function doLogout() {
    try {
        await signOut(auth);
        console.log("User signed out successfully");
        toast.success("Logged out successfully!");
        return true;
    } catch (error) {
        console.error("Error signing out:", error);
        toast.error("Error logging out. Please try again.");
        return false;
    }
}

async function cart_orders(id) {
    try {
        const cartRef = doc(db, "cart", id);  
        const orderRef = doc(db, "orders", id)
        await setDoc(cartRef, {
            data: []  
        });
        await setDoc(orderRef,{
            order:[]
        })
        console.log("Cart created for user:", id);
    } catch (error) {
        console.error("Error creating cart:", error);
    }
}

export async function doSignIn(username, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        console.log("User signed in successfully with UID: " + userCredential.user.uid);
        
        toast.success("Sign-in successful!");
        return true;
    } catch (error) {
        console.error(error);
        toast.error("Sign-in failed: Invalid data");
        return false;
    }
}