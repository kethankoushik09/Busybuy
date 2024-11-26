import { NavLink ,Outlet} from "react-router-dom"
// import userLoggedIn from
import { useValue } from "../components/AuthContext"
import { doLogout } from "../components/Auth";
function Navbar(){
    const {userLoggedIn,currentUser,SetuserLoggedIn,logout} = useValue();
    return(
        <>
            <div className="nav-container">
                <h3>Busy Buy</h3>
                <ul>
                    {/* <NavLink to="/" style={({isActive})=> {
                        return{
                            color:isActive?"red":""
                        }
                    }}>
                        <li>
                            <i class="fa-solid fa-house"></i>
                            Home
                        </li>
                    </NavLink> */}
                    <NavLink 
                        to="/" 
                        style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue' // Apply red color if the link is active
                        })}
                        >
                        <li>
                        <i className="fa-solid fa-house"></i>
                            Home
                        </li>
                    </NavLink>
                    {userLoggedIn?
                        <NavLink to="order"
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : 'blue' // Apply red color if the link is active
                            })}
                        >
                        
                        <li>
                            <i class="fa-solid fa-truck"></i>
                            My orders</li>
                        </NavLink>:""
                    }
                    {userLoggedIn?<NavLink to="cart"
                        style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue' // Apply red color if the link is active
                        })}
                    >
                    <li>
                        <i class="fa-solid fa-cart-shopping"></i>
                        Cart</li>
                    </NavLink>:""}
                    { userLoggedIn?
                    <NavLink to=""
                            style={({ isActive }) => ({
                                color: isActive ? 'blue':"blue" // Apply red color if the link is active
                            })}
                    >
                        <li onClick={doLogout}>
                        <i class="fa-solid fa-arrow-left"></i>
                        Logout
                        </li>
                     </NavLink>:
                     <NavLink to="signin"
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : 'blue' // Apply red color if the link is active
                            })}
                        >
                        <li>
                            <i class="fa-solid fa-right-to-bracket"></i>
                            SignIn</li>
                    </NavLink>

                    }
                    
                </ul>
            </div>
            <Outlet/>
        </>
    )
}
export default Navbar