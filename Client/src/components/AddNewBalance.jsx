import React, { useState } from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import axios from "axios";
import { useSelector } from "react-redux";

const AddNewBalance = ({ NewBalanceAdded }) => {
  const userAuthData = useSelector((state) => state);
  const loggedinUser = userAuthData.authData.userInfo;
  const loggedinUserId = userAuthData.authData.userInfo.id;
  const loggedinUserToken = userAuthData.authData.userInfo.token;

  const [addNewBalance, setAddNewBalance] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddNewBalance({ ...addNewBalance, [name]: value });
  };

  const addInitialBalanceClick = async () => {
    let url = "http://localhost:8000/api/v1/trancection/add-initial-balance";
    let config = {
      headers: {
        authorization: loggedinUserToken,
      },
    };
    const response = await axios.post(
      url,
      {
        title: addNewBalance.title,
        amount: addNewBalance.amount,
        category: addNewBalance.category,
        userId: loggedinUserId,
      },
      config
    );
	console.log(response);
    NewBalanceAdded(true);

    localStorage.setItem(
      "setNewBalanceAdded",
      JSON.stringify(true)
    );
	
  };

  return (
    <div className="mt-5 p-4 border border-emerald-400 rounded-lg">
      <h5 className="text-xl font-semibold mb-5 bg-emerald-500 py-3 text-white rounded-t-lg">
        Add Balance
      </h5>
      <InputBox
        onChange={handleChange}
        name="title"
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        placeholder="Name"
      />
      <InputBox
        onChange={handleChange}
        name="amount"
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        placeholder="Enter Amount : $0.00"
      />

      <select
        onChange={handleChange}
        name="category"
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
      >
        <option value="">Select </option>
        <option value="Salary">Salary</option>
        <option value="Business">Business</option>
        <option value="Freelance">Freelance</option>
      </select>

      <Button
        onClick={addInitialBalanceClick}
        className="text-2xl bg-[#7F3DFF] w-full p-4 rounded-md shadow-md font-medium text-[#fff]"
      >
        Add Balance
      </Button>
    </div>
  );
};

export default AddNewBalance;
