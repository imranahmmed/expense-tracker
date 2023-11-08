import React, { useState, useEffect } from "react";
import Div from "../components/Div";
import graph from "../assets/images/04.png";
import img01 from "../assets/images/01.png";
import Img from "../components/Img";
import Button from "../components/Button";
import Typhography from "../components/Typhography";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OnbordingPage = () => {
  const userAuthData = useSelector((state) => state);
  const navigate = useNavigate()


  useEffect(() => {
    if (userAuthData.authData.userInfo) {
      navigate("/home");
    }
  }, []);
  const [onboard, setOnboard] = useState(
    localStorage.getItem("setOnboard")
      ? JSON.parse(localStorage.getItem("setOnboard"))
      : true
  );

  const handleOnboard = () => {
    setOnboard(false);
    localStorage.setItem("setOnboard", JSON.stringify(false));
  };

  return (
    <>
      {onboard ? (
        <Div className="bg-[#7F3DFF] h-[calc(100vh-65px)] w-[calc(100wh-65px)] mx-auto shadow-lg rounded-3xl flex items-center justify-between flex-col">
          <Div className="h-[70%] w-full flex flex-col items-center justify-center">
            <Img src={graph} alt="Logo" className="w-[30%]" />
            <Typhography as="h1" className="text-5xl font-semibold mt-[30px]">
              Expence Tracker
            </Typhography>
          </Div>
          <Div className="p-12 w-full">
            <Button
              onClick={handleOnboard}
              className="text-2xl bg-[#c1c1e7] w-full p-4 rounded-md shadow-md font-medium text-[#7F3DFF] uppercase"
            >
              Next
            </Button>
          </Div>
        </Div>
      ) : (
        <Div className="bg-[#fff] h-[calc(100vh-65px)] w-[calc(100wh-65px)] mx-auto shadow-lg rounded-3xl flex items-center justify-between flex-col">
          <Div className="h-[70%] w-full flex flex-col items-center justify-center px-12">
            <Img src={img01} alt="Logo" className="w-[30%] mb-5" />
            <Typhography
              as="h1"
              className="text-5xl font-semibold mt-[30px] text-black capitalize"
            >
              Know where your money goes
            </Typhography>

            <Typhography
              as="p"
              className="text-xl font-semibold mt-[30px] text-black capitalize"
            >
              Track your transaction easily, with categories and financial
              report
            </Typhography>
          </Div>
          <Div className="p-12 w-[50%] mx-auto">
            <Link
              to="/signup"
              className="text-2xl block bg-[#7F3DFF] w-full p-4 rounded-md shadow-md font-medium text-[#fff] uppercase  mb-3"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-2xl block bg-[#c1c1e7] w-full p-4 rounded-md shadow-md font-medium text-[#7F3DFF] uppercase"
            >
              Login
            </Link>
          </Div>
        </Div>
      )}
    </>
  );
};

export default OnbordingPage;
