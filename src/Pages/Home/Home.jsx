import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Banner from "./Banner/Banner";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import Footer from "../../Components/Footer/Footer";
import AppSection from "../AppSection/AppSection";

const Home = () => {
  const [category, setCategory] = useState('all');
  return (
    <div>
      <Banner></Banner>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppSection></AppSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;