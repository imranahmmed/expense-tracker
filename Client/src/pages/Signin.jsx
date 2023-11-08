import React, { useState, useEffect } from "react";
import Div from "../components/Div";
import { FaEnvelope, FaKey, FaUserAlt } from "react-icons/fa";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import InputBox from "../components/InputBox";
import Img from "../components/Img";
import Button from "../components/Button";
import Typhography from "../components/Typhography";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { activeUser } from "../slices/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAuthData = useSelector((state) => state);

  const [showPass, setSetShowPass] = useState(false);
  const [showLoader, setSetShowLoader] = useState(false);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  console.log(userAuthData.authData.userInfo);

  useEffect(() => {
    if (userAuthData.authData.userInfo) {
      navigate("/home");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignIn = async () => {
    let url = "http://localhost:8000/api/v1/auth/signin";
    
    const response = await axios.post(url, {
      email: signInData.email,
      password: signInData.password,
    });

    console.log(response);
    console.log(response.status);
    console.log(response.data.id);

    if (response.status === 200) {
      dispatch(
        activeUser({
          name: response.data.userName,
          email: response.data.userEmail,
          id: response.data.userId,
          token: response.data.token,
          message: response.data.message,
        })
      );

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          name: response.data.userName,
          email: response.data.userEmail,
          id: response.data.userId,
          token: response.data.token,
          message: response.data.message,
        })
      );
    }
  };

  return (
    <>
      <Div className="bg-[#fff] h-[calc(100vh-65px)] w-[calc(100wh-65px)] mx-auto shadow-lg rounded-3xl flex items-center justify-between flex-col px-12 pt-12">
        <Header to="/signup" headerText="Login" />
        <Div className="h-[70%] w-full flex flex-col items-center justify-center">
          <Div className="block mb-5 w-[35%]">
            <Div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                <FaEnvelope className="text-lg text-slate-400" />
              </span>
              <InputBox
                onChange={handleChange}
                className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md py-4 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                type="email"
                name="email"
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
                className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md py-4 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                type={showPass ? "text" : "password"}
                name="password"
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
            onClick={handleSignIn}
            className="text-2xl bg-[#7F3DFF] w-full p-4 rounded-md shadow-md font-medium text-[#fff] "
          >
            Login
          </Button>

          <Typhography
            as="p"
            className="heading text-[#11175D] text-lg font-regular mb-16 mt-5"
          >
            Don't have an account?
            <Link
              to="/signup"
              className="text-orange text-orange-600 underline font-bold ml-2"
            >
              SignUp
            </Link>
          </Typhography>
        </Div>
      </Div>
    </>
  );
};

export default SignIn;
