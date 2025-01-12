import React, { useState } from "react";
import { assets } from "../../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("SignUp");
  return (
    <div className="absolute z-10 bg-[#00000099] w-full h-full text-white text-2xl grid">
      <form className="place-self-center w-[450px]">
        <div className="flex justify-between mb-5 bg-white py-2 px-1 rounded-xl">
          <h1 className="text-4xl text-black font-semibold">{currentState}</h1>
          <img
            className="p-2 rounded-full w-10 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col mb-5 space-y-3 ">
          {currentState==="Login"?<></>:<input className="p-1 rounded-md bg-transparent border-2 border-white" type="text" placeholder="username" required/>}
          <input className="p-1 rounded-md bg-transparent border-2 border-white" type="email" placeholder="user email" required/>
          <input className="p-1 rounded-md bg-transparent border-2 border-white " type="Password" placeholder="password" required/>
        </div>
        <button className="bg-green-500 px-2 rounded-md ">{currentState==="sign up"? "Create Account" : "Login"}</button>
        <div className="flex justify-between items-center gap-3 space-y-4">
          <input className="" type="checkbox" required />
          <p>By continuing, I agree to the Terms of Service and Privacy Notice.</p>
        </div>
        <div className="mt-4">
        {currentState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrentState("sign up")} className="text-orange-500 cursor-pointer">Click here</span></p>
        :<p>Already have an Account? <span onClick={()=>setCurrentState("Login")} className="text-green-400 cursor-pointer">Click here</span></p>
        }
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
