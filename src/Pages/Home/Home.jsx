import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Banner from "./Banner/Banner";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [category, setCategory] = useState('all');
  return (
    <div>
      <Banner></Banner>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <Footer></Footer>
    </div>
  );
};

export default Home;