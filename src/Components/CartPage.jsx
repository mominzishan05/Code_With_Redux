import React from "react";
import "../Css/CartPage.css";
import { useSelector, useDispatch } from "react-redux";
import { removecart } from "../Features/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const showdata = useSelector((state) => state.carts.items);

  return (
    <>
      <h1>My Cart</h1>

      {showdata.length === 0 ? (
        <div className="empty-cart">
          <p>No Items Selected...</p>
        </div>
      ) : (
        <div className="cart-container">
          {showdata.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="img-box">
                <img src={item.thumbnail} alt={item.title} />
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
