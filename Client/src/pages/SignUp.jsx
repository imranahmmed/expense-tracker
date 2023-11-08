import React, { useState, useEffect } from "react";
import Div from "../components/Div";
import { FaEnvelope, FaKey, FaUserAlt } from "react-icons/fa";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import InputBox from "../components/InputBox";
import Img from "../components/Img";
import Button from "../components/Button";
import Typhography from "../components/Typhography";
import Header from "../components/Header";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const SignUp = () => {
  const userAuthData = useSelector((state) => state);
  const navigate = useNavigate();
  let [showLoader, setSetShowLoader] = useState(false);
  let [showPass, setSetShowPass] = useState(false);

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userAuthData.authData.userInfo) {
      navigate("/home");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignUp = async () => {
    let url = "http://localhost:8000/api/v1/auth/registration";

    let response = await axios.post(url, {
      name: signUpData.fullName,
      email: signUpData.email,
      password: signUpData.password,
    });
    console.log(response);
  };

  return (
    <>
      <Div className="bg-[#fff] h-[calc(100vh-65px)] w-[calc(100wh-65px)] mx-auto shadow-lg rounded-3xl flex items-center justify-between flex-col px-12 pt-12">
        <Header to="/" headerText="Sign Up" />
        <Div className="h-[70%] w-full flex flex-col items-center justify-center">
          <Div className="block mb-5 w-[35%]">
            <Div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                <FaUserAlt className="text-lg text-slate-400" />
              </span>
              <InputBox
                onChange={handleChange}
                name="fullName"
                className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md py-4 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                type="email"
                placeholder="Full Name"
              />
            </Div>
          </Div>

          <Div className="block mb-5 w-[35%]">
            <Div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                <FaEnvelope className="text-lg text-slate-400" />
              </span>
              <InputBox
                onChange={handleChange}
                name="email"
                className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md py-4 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                type="email"
                placeholder="Email Address"
              />
            </Div>
          </Div>

          <Div className="block mb-5 w-[35%]">
            <Div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                <FaKey className="text-lg text-slate-400" />
              </span>
              <InputBox
                onChange={handleChange}
                name="password"
                className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md py-4 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                type={showPass ? "text" : "password"}
                placeholder="Password"
              />
              {showPass ? (
                <span className="absolute inset-y-0 right-0 flex items-center pl-5 pr-5 cursor-pointer">
                  <VscEye
                    onClick={() => {
                      setSetShowPass(!showPass);
                    }}
                    className="text-lg text-slate-400"
                  />
                </span>
              ) : (
                <span className="absolute inset-y-0 right-0 flex items-center pl-5 pr-5 cursor-pointer">
                  <VscEyeClosed
                    onClick={() => {
                      setSetShowPass(!showPass);
                    }}
                    className="text-lg text-slate-400"
                  />
                </span>
              )}
            </Div>
          </Div>
        </Div>
        <Div className="p-12 w-full">
          <Button
            onClick={handleSignUp}
            className="text-2xl bg-[#7F3DFF] w-full p-4 rounded-md shadow-md font-medium text-[#fff]"
          >
            Sign Up
          </Button>

          <Typhography
            as="p"
            className="heading text-[#11175D] text-lg font-regular mb-16 mt-5"
          >
            Already have an account?
            <Link
              to="/signin"
              className="text-orange text-orange-600 underline font-bold ml-2"
            >
              Login
            </Link>
          </Typhography>
        </Div>
      </Div>
    </>
  );
};

export default SignUp;
