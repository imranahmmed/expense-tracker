import "./App.css";
import Typhography from "./components/Typhography";
import Signin from "./pages/Signin";
import OnbordingPage from "./pages/OnbordingPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages";
import RootLayout from "./layouts/RootLayout";
import AddExpence from "./pages/AddExpence";
import AddIncome from "./pages/AddIncome";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<OnbordingPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="addexpence" element={<AddExpence />} />
        <Route path="addIncome" element={<AddIncome />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
    // <div className="App">
    //   <Typhography as="h1" className="text-3xl font-bold underline">
    //     Expense Tracker
    //   </Typhography>
    // </div>
  );
}

export default App;
