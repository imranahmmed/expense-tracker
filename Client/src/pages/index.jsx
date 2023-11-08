import React, { useState } from "react";
import Div from "../components/Div";
import Header from "../components/Header";
import Graph from "../components/Graph";
import Balance from "../components/Balance";
import AddNewBalance from "../components/AddNewBalance";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const [newBalanceAdded, setNewBalanceAdded] = useState(localStorage.getItem("setNewBalanceAdded") ? JSON.parse(localStorage.getItem("setNewBalanceAdded")) : false);

  return (
    <>
      {newBalanceAdded ? (
        <Dashboard />
      ) : (
        <Div>
          <Balance />
          <AddNewBalance NewBalanceAdded={setNewBalanceAdded} />
        </Div>
      )}
    </>
  );
};

export default Home;
