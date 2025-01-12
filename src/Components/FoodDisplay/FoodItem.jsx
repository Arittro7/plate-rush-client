import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, image, description }) => {

  const {cartItem, addToCart, removeCartItem} = useContext(StoreContext)

  return (
    <div className="mb-3">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="relative">
          <img className="p-4" src={image} alt="food item" />
          {!cartItem[id] ? (
            <img  
              className="absolute bottom-5 right-5 w-10 cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
            />
          ) : (
            <div className="absolute bottom-5 right-5 flex gap-2 bg-white px-1 py-1 rounded-full">
              <img 
              className="cursor-pointer"
              onClick={()=>removeCartItem(id)} src={assets.remove_icon_red} alt="" />
              <p className="text-lg font-semibold">{cartItem[id]}</p>
              <img
              className="cursor-pointer" 
              onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
          )}
        </div>
        <div className="card-body">
          <div className="p-4 bg-gray-100 rounded-xl">
            <h2 className="card-title">{name}</h2>
            <img className="w-24" src={assets.rating_starts} alt="" />
            <p>{description}</p>
            <div className="card-actions justify-center mt-4 items-center">
              <p className="text-2xl text-orange-500 font-semibold">${price}</p>
              <button className="btn px-4 bg-orange-500 hover:bg-green-400">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
