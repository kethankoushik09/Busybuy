import { updateDoc,doc } from "firebase/firestore";
import { useValue } from "../components/AuthContext";
import { useItem } from "../components/UserContext";
import { db } from "../components/firebaseinit";
export function Cartitem(props){
    const{currentUser} = useValue();
    const {cartData,itemcontains} = useItem();
    const {data} = props;
    var cart_array = cartData(currentUser.uid);
    async function incerment_qty(cartdata,data){
        const idx = cartdata.findIndex((item,idx)=>item.id === data.id);
        console.log("dddddddddddddddddddddddddddddddddddddd");
        console.log(cartdata );
        console.log(cartdata);
        // lo
        console.log(idx);
        
        
        cartdata[idx].qty++;
        const docRef = doc(db,"cart",currentUser.uid);
        await updateDoc(docRef,{
             data:[...cart_array]
            }
        )

        return cartdata;
    }
    async function decrement_qty(cartdata,data) {
        const idx = cartdata.findIndex((item,idx)=>item.id === data.id);
        if(cartdata[idx].qty>1){
            cartdata[idx].qty--;
            const docRef = doc(db,"cart",currentUser.uid);
            await updateDoc(docRef,{
                data:[...cart_array]
                }
            )
        }
        
        else{
            deletion(data);
            
        }
        

        
    }
    async function deletion(data) {
        console.log(cart_array);
        console.log(data.description + " ........." + data.id);
    
        // Corrected: reassign the filtered array back to cart_array
        cart_array = cart_array.filter((item) => item.id !== data.id);  
        console.log(cart_array);
        
        const docRef = doc(db, "cart", currentUser.uid);
        await updateDoc(docRef, {
            data: [...cart_array]
        });
    }
    return(
        <>
           <div className="item-card">
                <div className="image">
                    <img src={data.image} className="stt"/>
                </div>
                <div className="content-area">
                    {data.description}
                </div>
                <div className="price">{"$"}{data.price}
                    <span id="min" className="qty-cart"><i class="fa-solid fa-circle-minus" onClick={()=>decrement_qty(cart_array,data)}></i></span>
                     <span>{data.qty}</span>
                    <span className="qty-cart" ><i class="fa-solid fa-circle-plus" onClick={()=>incerment_qty(cart_array,data)} ></i></span>
                </div>
                <button className="cart-btn" id="remove-btn" onClick={()=>deletion(data)}>Remove from Cart</button>
            </div>
        </>
    )
}