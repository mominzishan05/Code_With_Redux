import React from "react";
import "../Css/CartPage.css";
import { useSelector,useDispatch } from "react-redux";
import { removecart } from "../Features/cartSlice";

const CartPage = () => {
    const dispatch = useDispatch();
    const showdata = useSelector((state) => state.carts.items);


  return (
    <>
   {showdata.length === 0 ? (
  <p>No Items Selecteed .....</p>
) : (
  <div>
    {showdata.map((item, index) => (
      <div key={index}>
        <div className="img-box">
            <img src={item.thumbnail} alt="" />
        </div>
        <h3>{item.title}</h3>
        <p>₹ {item.price}</p>
        <button onClick={() => dispatch(removecart(item.id))}>
          Remove
        </button>
      </div>
    ))}
  </div>
)}

    </>
  );
};
export default CartPage;
