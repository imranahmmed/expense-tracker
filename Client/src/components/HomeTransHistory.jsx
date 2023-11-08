import React from "react";
import Button from "./Button";
import Div from "./Div";
import TrancCard from "./TrancCard";
const HomeTransHistory = () => {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-semibold">Transection History</h3>
      <Div className="tabs flex items-center justify-center mt-3">
        <Button className="w-full py-3 px-4 rounded-3xl text-black font-semibold text-lg hover:text-white hover:bg-orange-400 duration-300">
          Today
        </Button>
        <Button className="w-full py-3 px-4 rounded-3xl  text-black font-semibold text-lg hover:text-white hover:bg-orange-400 duration-300">
          Week
        </Button>
        <Button className="w-full py-3 px-4 rounded-3xl  text-black font-semibold text-lg hover:text-white hover:bg-orange-400 duration-300">
          Month
        </Button>
      </Div>


      <TrancCard/>
      <TrancCard/>
    </div>
  );
};

export default HomeTransHistory;
