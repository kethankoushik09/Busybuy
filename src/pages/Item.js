import { useItem } from "../components/UserContext";
import { useNavigate } from "react-router-dom";
import { useValue } from "../components/AuthContext";
import { db } from "../components/firebaseinit";
import { updateDoc ,doc} from "firebase/firestore";
import { useState } from "react";
export function Item(props){
    const nav = useNavigate();
    const {link,desc,price,data} = props;
    const {userLoggedIn,currentUser} = useValue();
    const {orders,cart,cartData,itemcontains} = useItem();
    const [loading,SetLoading] = useState(false);

    async function addCart(data){
        if(!userLoggedIn){
            nav("signin")
        }
        else{
            // console.log(data);
            // console.log(currentUser.uid);
            SetLoading(true);
            const usercart = cartData(currentUser.uid);
            console.log(usercart);
            const docREf = doc(db,"cart",currentUser.uid)
            const addi = itemcontains(usercart,data);
            if(addi){
                await updateDoc(docREf,{
                    data:[...addi]
                })
            } 
            else{
                await updateDoc(docREf,{
                    data:[...usercart,{...data,qty:1}]
                })
            }
            SetLoading(false);
            

        }

    }
    return(
        <>
            <div className="item-card">
                <div className="image">
                    <img src={link} className="stt"/>
                </div>
                <div className="content-area">
                    {desc}
                </div>
                <div className="price">{"$"}{price}</div>
                <button className="cart-btn" onClick={() =>addCart(data)} >{loading?"Adding...":"Add To Cart"}</button>
            </div>
        </>
    )
}