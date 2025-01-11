import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Banner from "./Banner/Banner";

const Home = () => {
  const [category, setCategory] = useState('all');
  return (
    <div>
      <Banner></Banner>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
    </div>
  );
};

export default Home;