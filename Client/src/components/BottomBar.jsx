import React from "react";
import Div from "./Div";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <Div className="fixed bg-slate-600 w-full bottom-0 left-0">
      <Div className="menus p-6 px-10">
        <ul className="flex items-center justify-between text-white">
          <li className="text-lg capitalize font-medium">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-lg capitalize font-medium">
            <Link to="addIncome">Add Income</Link>
          </li>
          <li className="text-lg capitalize font-medium">
            <Link to="addexpence">Add Expence</Link>
          </li>
          <li className="text-lg capitalize font-medium">
            <a href="#">Report</a>
          </li>
        </ul>
      </Div>
    </Div>
  );
};

export default BottomBar;
