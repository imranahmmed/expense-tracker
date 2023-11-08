import React from "react";
import Div from "./Div";
import Img from "./Img";

const AmountCard = ({ bgColor, icon, title, amount }) => {
  return (
    <Div className="mt-5 rounded-xl overflow-hidden w-full">
      <Div className={bgColor}>
        <Div className="flex items-center p-5 rounded-lg">
          <Div className="flex items-center justify-center h-20 w-20 bg-white rounded-lg">
            <Img src={icon} />
          </Div>
          <Div className="text-left ml-6">
            <h3 className="text-lg text-white font-semibold">{title}</h3>
            <h3 className="text-3xl text-white font-bold">${amount}</h3>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default AmountCard;
