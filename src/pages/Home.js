import { useState } from "react";
import { useItem } from "../components/UserContext";
import { Item } from "./Item";
import { Filters } from "./Filters";
// import { useItem } from "../components/UserContext";
function Home(){
    const {filterproduts} = useItem();
    // console.log(products);
    // const [activeFilter, SetactiveFilters]
    
    const [val,setVal] = useState(0);
    return(
        <>
            <div className="search-conatiner">
                <input type="text" placeholder="Search By Name" className="serach-bar"/>
            </div>
            <div className="home-container">
            <div className="filter-section">
                <h3>Filter</h3>
                <h3>price:{val}</h3>
                <input type="range" id="myRange" name="volume" min="0" max="99991" value={val}
                onChange={(e) =>setVal(e.target.value)}/>
                <Filters/>
                
            </div>
            <div className="items-section">
                {/* <Item/>
                <Item/>
                <Item/>
                <Item/> */}
                {filterproduts.map((item,idx)=>{
                    return(
                        <Item link={item.image} desc={item.description} price={item.price} data = {item}/> 
                    )
                })}
            </div>
            </div>
        </>
    )
}
export default Home;