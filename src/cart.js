import { useItem } from "./components/UserContext";
import { useValue } from "./components/AuthContext";
import { Cartitem } from "./pages/Cartitem";
import { useNavigate } from "react-router-dom";
import { updateDoc ,doc} from "firebase/firestore";
import { db } from "./components/firebaseinit";

export default function Cart(){
    const {cart,orders} = useItem();
    console.log(cart);
    console.log(orders);
    
    const nav = useNavigate();
    const {currentUser} = useValue();
    const cart_array = cart.find((item)=>item.id === currentUser.uid)
    const order_array = orders.find((item)=>item.id === currentUser.uid);
    console.log(order_array.order);
    console.log(cart_array.data);
    if(cart_array.data.length === 0){
        return(
            <>
                <h1>cart is empty</h1>
            </>
        )
    }
    const total = cart_array.data.reduce((acc, item) => {
        return acc + (item.qty * item.price);
    }, 0);
    async function book(){
        const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0')
        const docRef = doc(db,"orders",currentUser.uid);
        const cartReF = doc(db,"cart",currentUser.uid);

        await updateDoc(docRef,{
            order :[...order_array.order,
            {date:`${year}-${month}-${day}`,
            total:Math.ceil(total),
            ord:[...cart_array.data]}]
        })
        await updateDoc(cartReF,{
            data:[]
        })

        nav("/order")

    }
    return(
        <>
            <div className="total-purchase">
                <h3>TotalPrice:- {Math.round(total)}$</h3>
                <button className="p-btn" onClick={book}>purchase</button>
            </div>
            <div className="cart-item-section">
                {cart_array.data.map((item,indx)=>(
                    <Cartitem  id ={indx} data = {item}/>
                ))}
            </div>
        </>

    )
}