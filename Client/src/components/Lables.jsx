import React from "react";
import Div from "./Div";
import Typhography from "./Typhography";

const data = [
  {
    type: "Savings",
    color: "rgb(255, 99, 132)",
    percent: 45,
  },
  {
    type: "Investment",
    color: "rgb(54, 162, 235)",
    percent: 20,
  },
  {
    type: "Expence",
    color: "rgb(255, 205, 86)",
    percent: 35,
  },
];

const Lables = () => {
  return (
    <>
      {data.map((data, index) => (
        <LableComponent key={index} data={data} />
      ))}
    </>
  );
};

export default Lables;

export const LableComponent = ({ data }) => {
  const { type, color, percent } = data;
  if (!data) return <></>;

  return (
    <Div className="lables flex justify-between text-black">
      <Div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ backgroundColor: color ?? "#f9c74f" }}
        ></div>
        <Typhography as="h3" className="text-md">
          {type ?? ""}
        </Typhography>
      </Div>
      <Typhography as="h3" className="font-bold">
        {percent ?? 0}%
      </Typhography>
    </Div>
  );
};
