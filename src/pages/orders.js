import { useItem } from "../components/UserContext";
import { useValue } from "../components/AuthContext";
import OrderItem from "./OrderItem";
export default function Orders(){
    const {orders} = useItem();
    const {currentUser} = useValue();
    const order_array = orders.find((item)=>item.id === currentUser.uid);
    console.log(order_array.order);
    if(order_array.order.length === 0){
        return(
            <>
                <h1>No orders avaliable</h1>
            </>
        )
    }
    return(
        <>
            <div className="order-section">
                <h1>Your Orders</h1>
                {order_array.order.map((item,indx)=><OrderItem data={item} id={indx}/>)}
            </div>
        </>
    )
}