import React from "react";
import Balance from "./Balance";
import Div from "./Div";
import AmountCard from "./AmountCard";
import img05 from "../assets/images/05.png";
import img06 from "../assets/images/06.png";
import Graph from "./Graph";
import HomeTransHistory from "./HomeTransHistory";

const Dashboard = () => {
  return (
    <Div>
      <Balance />
      <Div className="flex items-center justify-center gap-x-5">
        <AmountCard
          title="Income"
          icon={img05}
          bgColor="bg-emerald-600"
          amount="0.00"
        />
        <AmountCard
          title="Expence"
          icon={img06}
          bgColor="bg-[#fd3c4a]"
          amount="0.00"
        />
      </Div>

      <HomeTransHistory/>
    </Div>
  );
};

export default Dashboard;
