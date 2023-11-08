import React from "react";
import { Outlet } from "react-router-dom";
import Div from "../components/Div";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
const RootLayout = () => {
  return (
    <>
      <Div className="bg-[#fff] h-[calc(100vh-110px)] w-[calc(100wh-65px)] overflow-y-scroll mx-auto shadow-lg rounded-3xl flex items-center justify-start flex-col px-12 pt-12 relative pb-20">
        <Header to="/" headerText="Home" />
        <Div className="w-[50%] grid md:grid-cols-1 gap-4 mt-10">
          <Outlet />
        </Div>
        <BottomBar />
      </Div>
    </>
  );
};

export default RootLayout;
