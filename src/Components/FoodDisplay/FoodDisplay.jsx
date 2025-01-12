import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <h1 className="text-xl lg:text-3xl capitalize font-semibold text-center mb-5">
        Top Dishes are waiting for you
      </h1>
      <div className="grid lg:grid-cols-4 gap-2">
        {food_list
          .filter((item) => category === "all" || category === item.category) 
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
