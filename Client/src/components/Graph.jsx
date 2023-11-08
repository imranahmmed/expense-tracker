import React from "react";
import Div from "./Div";
import { Chart, ArcElement } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import Typhography from "./Typhography";
import Lables from "./Lables";

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: -20,
        border: 0,
      },
    ],
  },

  options: {
    cutout: 120,
  },
};

const Graph = () => {
  return (
    <Div className="flex justify-center max-w-xs mx-auto">
      <Div className="item">
        <Div className="chart relative">
          <Doughnut {...config} />
          <Typhography
            as="h3"
            className="doughnutTitle text-black font-medium text-xl"
          >
            Total
            <span className="text-3xl block font-semibold text-emerald-400">
              Tk-{0}
            </span>
          </Typhography>
        </Div>
        <Div className="flex flex-col py-10 gap-4">
          <Lables />
        </Div>
      </Div>
    </Div>
  );
};

export default Graph;
