import React, { useState } from "react";
import Div from "../components/Div";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddIncome = () => {
  const navigate = useNavigate();
  const userAuthData = useSelector((state) => state);
  const loggedinUser = userAuthData.authData.userInfo;
  const loggedinUserId = userAuthData.authData.userInfo.id;
  const loggedinUserToken = userAuthData.authData.userInfo.token;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
    : "";
  const [incomeData, setIncomeData] = useState({
    amount: "",
    title: "",
    category: "",
    description: "",
  });

  const handleChaneg = (e) => {
    const { name, value } = e.target;
    setIncomeData({ ...incomeData, [name]: value });
  };

  const saveIncomeData = async () => {
    let url = "http://localhost:8000/api/v1/trancection/add-income";
    let config = {
      headers: {
        authorization: loggedinUserToken,
      },
    };
    const response = await axios.post(
      url,
      {
        title: incomeData.title,
        amount: incomeData.amount,
        date: formattedDate,
        category: incomeData.category,
        description: incomeData.description,
        userId: loggedinUserId,
        type: "income",
      },
      config
    );
    setIncomeData({ amount: "", title: "", category: "", description: "" });
  };

  console.log(formattedDate);
  console.log(incomeData);

  return (
    <Div>
      <h5 className="text-xl font-semibold mb-5 bg-emerald-500 py-3 text-white rounded-t-lg">
        Add Income
      </h5>

      <InputBox
        onChange={handleChaneg}
        name="amount"
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        placeholder="Enter Amount : $0.00"
        value={incomeData.amount}
      />
      <InputBox
        onChange={handleChaneg}
        name="title"
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        placeholder="Title"
        value={incomeData.title}
      />

      <InputBox
        onChange={handleChaneg}
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        placeholder="Enter Amount : $0.00"
        type="file"
      />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        placeholder="dd/mm/yyy"
        type="date"
      />

      <select
        onChange={handleChaneg}
        name="category"
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
      >
        <option defaultValue>Choose a Category</option>
        <option value="Salary">Salary</option>
        <option value="Business">Business</option>
        <option value="Freelance">Freelance</option>
      </select>

      <textarea
        onChange={handleChaneg}
        name="description"
        rows="5"
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        value={incomeData.description}
      ></textarea>

      <Button
        onClick={saveIncomeData}
        className="text-2xl bg-[#7F3DFF] w-full p-4 rounded-md shadow-md font-medium text-[#fff] "
      >
        Add Income
      </Button>
    </Div>
  );
};

export default AddIncome;
