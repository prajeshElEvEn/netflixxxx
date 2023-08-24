import React from "react";
import "./styles/App.css";
import HomeScreen from "./pages/HomeScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
