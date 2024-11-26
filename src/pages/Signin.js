// import { useNavigate } from "react-router-dom";
import { doSignIn } from "../components/Auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Signin(){
    const nav = useNavigate();
    const [email,Setemail] = useState("");
    const [password,Setpassword] = useState("");
    const [loading,Setloading] = useState(false);
    async function submitHandler(e){
        e.preventDefault();
        Setloading(true);
        const isSucess = await doSignIn(email,password);
        if(isSucess){
            nav("/");
        }
        ClearInput();
        
    }
    function ClearInput(){
        Setemail("");
        Setpassword("");
        Setloading(false);

    }
    return(
        <>
            <div className="signin-section">
                <h1>Sign in</h1>
                <form onSubmit={submitHandler}>
                    <input type="email" placeholder="Enter Email" className="sign-input"
                    value={email} onChange={(e)=>Setemail(e.target.value)}/>
                    <input type="password" placeholder="Enter password" className="sign-input"
                    value={password} onChange={(e)=>Setpassword(e.target.value)}/>
                    <button className="submit-btn">{loading?"....":"Sign in"}</button>
                </form>
                <p onClick={() => nav("/signup")}>Or SignUp instead</p>

            </div>
            
        </>
    )
}
export default Signin;