import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
    <Header />
    <Dashboard />
    </div>
  );
}

export default App;
