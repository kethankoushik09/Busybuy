import { createContext, useContext, useEffect, useState } from "react";
// import db from "./firebaseinit";
import { db } from "./firebaseinit";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { useValue } from "./AuthContext";
import CustomAuthContext from "./AuthContext";

const Usercontext = createContext();
export function useItem(){
    return useContext(Usercontext);
}

export function Customusercontext({children}){
    const [products,SetProducts] = useState([]);
    const [filterproduts,SetfilterProducts] = useState([]);
    const [activeFilters,SetActiveFilters] = useState([]);
    const [orders,SetOrders] = useState([]);
    const [cart,SetCart] = useState([]);
    const filters = {
        id:"categories",
        name:"categories",
        Options:[
            {value:"men's clothing",label:"Men's clothing"},
            {value:"jewelery",label:"Jewelery"},
            {value:"electronics",label:"Electronics"},
            {value:"women's clothing",label:"Women's clothing"}
        ]

    }
    useEffect(() => {
        const updateFilteredProducts = () => {
            if (activeFilters.length === 0) {
                SetfilterProducts(products);  
            } else {
                const filtered = products.filter((item) => activeFilters.includes(item.category));
                SetfilterProducts(filtered);  
            }
        };

        updateFilteredProducts();  
    }, [activeFilters, products]);
    useEffect(()=>{
        onSnapshot(collection(db,"cart"),(snap)=>{
            const bg = snap.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            SetCart(bg);
        })
        console.log(cart);        
    },[])
    useEffect(()=>{
        onSnapshot(collection(db,"orders"),(snap)=>{
            const bg = snap.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            SetOrders(bg);
        })
        console.log(orders);        
    },[])
    useEffect(()=>{
        async function fetching() {
            const docRef = await getDocs(collection(db,"pds"));
            const prods = docRef.docs.map((doc)=>{
                return{
                    ...doc.data()
                }
            })

            SetProducts(prods);
            SetfilterProducts(prods);
            console.log(prods);
            
        }
        fetching();
    },[])
    function cartData(uid){
        const res = cart.find((item)=>item.id === uid);
        console.log(res);
        
        return res.data;
    }
    function itemcontains(cartdata,data){
        const result = cartdata.findIndex((item)=>item.id === data.id);
        // console.log(result);
        
        if(result !== -1){
            cartdata[result].qty+=1;
            return cartdata;
            // return null;
        }
        else{
            return null;
        }
    }
    

    
    return(
        <>
            <CustomAuthContext>
                <Usercontext.Provider value={{filterproduts,filters,activeFilters,SetActiveFilters,
                    cartData,itemcontains,orders,cart,SetOrders,SetCart}}>
                    {products && children}
                </Usercontext.Provider>
            </CustomAuthContext>
        </>
    )

}