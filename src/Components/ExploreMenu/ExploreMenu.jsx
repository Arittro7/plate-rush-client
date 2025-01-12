import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="mt-10 text-center" id="menu-item">
      <h1 className="text-3xl font-semibold">Explore Menu</h1>
      <p>Choose your desire food from our menu</p>
      <div className="flex gap-8 justify-center mt-5 overflow-x-auto overflow-hidden">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
              className="text-center mx-1"
              key={index}
            >
              <img
                className={`w-[7.5vh] min-w-24 cursor-pointer ${
                  category === item.menu_name
                    ? "border-4 border-green-500 p-1 rounded-full"
                    : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p className="cursor-pointer text-xl mt-3">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="border-2 my-8 border-gray-300" />
    </div>
  );
};

export default ExploreMenu;
