import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// import components
import NavBar from "./components/NavBar";
import CreateExpense from "./pages/CreateExpense/CreateExpense";
import TotalExpense from "./pages/TotalExpense/TotalExpense";
import ViewExpense from "./pages/ViewExpense/ViewExpense";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<CreateExpense />} />
            <Route path="/view" element={<ViewExpense />} />
            <Route path="/total" element={<TotalExpense />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
