import React, { useEffect, useState } from "react";
import "../Css/HomePage.css";
import { useDispatch } from "react-redux";
import { addtocart } from "../Features/cartSlice";

const HomePage = () => {
    const [data,setData] = useState([]);
    
    const dispatch = useDispatch();
  const fetchdata = async () => {

    const userdata = await fetch("https://dummyjson.com/products");
    const responce = await userdata.json()
    setData(responce.products);
    console.log(responce.products);
  };
  
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <h1>I am Home Page </h1>
      <div>
        {
            data.map((value,index)=>(
                <div className="card-box" key={index}>
                    <div className="card-img">
                        <img src={value.thumbnail} alt="" />
                    </div>
                    <div className="card-title">{value.title}</div>
                    <div className="card-price">{value.price}</div>
                    <button onClick={()=>dispatch(addtocart(value))}>Add-To-Cart</button>
                </div>
            ))
        }
      </div>
    </>
  );
};
export default HomePage;
