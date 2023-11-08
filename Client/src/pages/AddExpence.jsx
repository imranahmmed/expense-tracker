import React from "react";
import Div from "../components/Div";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

const AddExpence = () => {
  return (
    <Div>
      <h5 className="text-xl font-semibold mb-5 bg-red-500 py-3 text-white rounded-t-lg">
        Add Expence
      </h5>

      <InputBox
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        placeholder="Enter Amount : $0.00"
      />
      <InputBox
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        placeholder="Name"
      />

      <InputBox
        className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5"
        placeholder="Enter Amount : $0.00"
        type="File"
      />

      <select className="placeholder:text-slate-400 placeholder:text-lg block bg-white w-full border border-slate-300 text-xl font-semibold text-[#11175D] rounded-md p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 mb-5">
        <option defaultValue>Choose a Category</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

      <Button className="text-2xl bg-[#7F3DFF] w-full p-4 rounded-md shadow-md font-medium text-[#fff] ">
        Add Expence
      </Button>
    </Div>
  );
};

export default AddExpence;
