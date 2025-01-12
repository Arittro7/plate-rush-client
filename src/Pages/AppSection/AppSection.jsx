import { assets } from "../../assets/assets";
const AppSection = () => {
  return (
    <div className="text-center my-4" id="contact">
      <h1 className="text-4xl font-semibold">For Better Experience Download The <br /> 
      <span className="text-green-700">Plate Rush </span>App</h1>
      <div className="flex justify-center mt-4 gap-2 ">
        <img className="w-48 cursor-pointer " src={assets.play_store} alt="" />
        <img className="w-48 cursor-pointer " src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppSection;