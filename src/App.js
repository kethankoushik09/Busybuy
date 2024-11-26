// import Navbar from "./pages/Nav";
// import Home from "./pages/Home";
// import Signin from "./pages/Signin";
// import SignUp from "./pages/SignUp";
// import Cart from "./cart";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import db from "./components/firebaseinit";
// // import cutsomAuthContext from "./components/AuthContext";
// import { Customusercontext } from "./components/UserContext";
// import CustomAuthContext from "./components/AuthContext";
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import Orders from "./pages/orders";
// import 'react-toastify/dist/ReactToastify.css';
// function App() {
//   const rt = createBrowserRouter([
//     {path:"/",
//       element:<Navbar />, 
//       children:[
//       {index:true, element:<Home/>},
//       {path:"signin",element:<Signin/>},
//       {path:"/signup",element:<SignUp/>},
//       {path:"cart",element:<Cart/>},
//       {path:"order",element:<Orders/>}

//     ]}
//   ])
//   return (
//     <>
//     <Customusercontext>
//       <CustomAuthContext>
//         <RouterProvider router={rt}/>
//         <ToastContainer />
//       </CustomAuthContext>
//     </Customusercontext>
//     </>
//   );
// }

// export default App;


import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Nav";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Cart from "./cart";
import Orders from "./pages/orders";
import { ToastContainer } from "react-toastify";
import {Customusercontext} from "./components/UserContext";
import CustomAuthContext from "./components/AuthContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Customusercontext>
      <CustomAuthContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Orders />} />
          </Routes>
          <ToastContainer />
        </Router>
      </CustomAuthContext>
    </Customusercontext>
  );
}

export default App;
