import React, { useState } from "react";
import "../Css/LoginPage.css";
import {  useNavigate } from "react-router-dom";
import HomePage from "./HomePage";


const LoginPage = ({ setIsAuth }) => {
    const [name , setName]= useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();


const login = async () => {
    const userapi = await fetch("https://dummyjson.com/users");
    const responce = await userapi.json();

    const user = responce.users.find(
      (res) => res.username === name && res.password === pass
    );

    user && (setIsAuth(true), navigate("/"));
  };


   return (
    <>
      <label htmlFor="">Enter user name : </label>
      <input type="text" onChange={(event)=>setName(event.target.value)}value={name} placeholder="Enter UserName ..." />
      <br /><br />
      <label htmlFor="">Enter Password</label>
      <input type="password" onChange={(event)=>setPass(event.target.value)} value={pass}  />
      <br /><br />
      <button onClick={login}>Login</button>
    </>
  );
};
export default LoginPage;
