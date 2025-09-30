import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import Products from "./Pages/Products";
import axios from "axios";

function App() {
  const [cardDetails,setCardDetails]=useState([]);
  const [cartDetails,setCartDetails]=useState([])
    
    useEffect(()=>{
         axios.get("https://fakestoreapi.com/products")
         .then((response)=>{
            setCardDetails(response.data)
            console.log(response.data)
        })
         .catch((err)=>console.log(err))
    },[])

  return (
    <div>
      <Navbar cartDetails={cartDetails} />
      <Routes>
        <Route
          path="/"
          element={
            <Products
            cartDetails={cartDetails}
            setCartDetails={setCartDetails}
              cardDetails={cardDetails}
              setCardDetails={setCardDetails}
            />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cartDetails={cartDetails} setCartDetails={setCartDetails} />}
        />
      </Routes>
    </div>
  );
}

export default App;
