import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// import components
import NavBar from "./components/NavBar";
import CreateExpense from "./pages/CreateExpense/CreateExpense";
import TotalExpense from "./pages/TotalExpense/TotalExpense";
import ViewExpense from "./pages/ViewExpense/ViewExpense";
import UserContext from "./Context";
function App() {
  const [selectType, setSelectType] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [finalData, setFinalData] = useState({
    type: "",
    description: "",
    amount: "",
  });

  return (
    <div className="App">
      <div className="container">
        <Router>
          <NavBar />
          <UserContext.Provider
            value={{
              selectType,
              setSelectType,
              description,
              setDescription,
              amount,
              setAmount,
              finalData,
              setFinalData,
            }}
          >
            <Routes>
              <Route path="/" element={<CreateExpense />} />
              <Route path="/view" element={<ViewExpense />} />
              <Route path="/total" element={<TotalExpense />} />
            </Routes>
          </UserContext.Provider>
        </Router>
      </div>
    </div>
  );
}

export default App;
