import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Banner from "./Banner/Banner";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState('all');
  return (
    <div>
      <Banner></Banner>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
    </div>
  );
};

export default Home;