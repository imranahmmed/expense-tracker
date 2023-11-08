import React from "react";
import Div from "./Div";
import Img from "./Img";
import trancImg from "../assets/images/07.png";
const TrancCard = () => {
  return (
    <Div className="mt-5 rounded-xl overflow-hidden w-full">
      <Div className="bg-slate-500">
        <Div className="flex items-center p-5 rounded-lg">
          <Div className="flex items-center justify-center w-[15%] bg-white rounded-lg">
            <Img src={trancImg} />
          </Div>
          <Div className="text-left ml-6 w-[85%]">
            <h3 className="text-2xl text-white font-medium w-full flex justify-between">
              Shopping <span>- $120</span>
            </h3>
            <h3 className="text-md text-white font-medium w-full flex justify-between">Buy some grocery <span>10:00 AM</span></h3>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default TrancCard;
