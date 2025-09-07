import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Routers/Navbar";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import HomePage from "./Components/HomePage";
import CartPage from "./Components/CartPage";
import LoginPage from "./Components/LoginPage";
import { Provider } from "react-redux";
import { store } from "./App/store";
import ProtectRoute from "./Routers/ProtectRoute";

function App() {
  
  const [count, setCount] = useState(0);
  const [isAuth,setIsAuth] = useState(false);


  return (
    <>
    <Provider store={store}>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ isAuth ? <HomePage /> : <Navigate to="/login" /> } />
          <Route path="/cart" element={ isAuth ? <CartPage /> : <Navigate to="/login" /> } />
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    <h2>Show how to Use Navbar</h2>
    </>
  );
}

export default App;
