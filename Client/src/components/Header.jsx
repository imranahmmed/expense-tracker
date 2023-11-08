import React from "react";
import Div from "./Div";
import { BsArrowLeft } from "react-icons/bs";
import Typhography from "./Typhography";
import { Link } from "react-router-dom";
const Header = ({headerText, to}) => {
  return (
    <>
      <Div className="header bg-slate-300 flex items-center justify-between text-xl font-semibold text-black py-3 px-12 w-full rounded-lg">
        <Link to={to} className="w-[47%]">
          <BsArrowLeft className="text-2xl"/>
        </Link>
        <Div className="w-[53%] text-left">
          <Typhography as="h3">{headerText}</Typhography>
        </Div>
      </Div>
    </>
  );
};

export default Header;
