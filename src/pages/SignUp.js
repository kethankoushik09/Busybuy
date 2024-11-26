// import { SignUppage } from "../components/Auth";
import { SignUppage } from "../components/Auth";
import { useValue } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
function SignUp(){
    // const {loading} = useValue();
    
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [email,Setemail] = useState("");
    const [password,Setpassword] = useState("");
    const [loading,Setloading] = useState(false);

    useEffect(()=>{
        Setemail("");
        Setpassword("");
        
    },[])
    
    async function submitHandler(e){
        Setloading(true);
        const mail = email;
        const pass = password;
        e.preventDefault();
        const isSucess = await SignUppage(mail,pass);
        if(isSucess){
            navigate("/"); 
        } 
        clearInput();
    }
    function clearInput(){
        Setemail("");
        Setpassword("");
        Setloading(false);
    }

    return(
        <>
            <div className="signout-section">
                <h1>Sign Up</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Enter name" className="sign-input" />
                    <input type="email" placeholder="Enter Email" ref={emailRef}

                    className="sign-input" value={email} onChange={(e)=>Setemail(e.target.value)}/>
                    <input type="password" placeholder="Enter password" ref={passwordRef}
                    className="sign-input" value={password}
                    onChange={(e)=>Setpassword(e.target.value)}/>
                    <button className="submit-btn" type="submit">{loading?".....":"Sign Up"}</button>
                </form>
            </div>
            

        </>
    )
}
export default SignUp;