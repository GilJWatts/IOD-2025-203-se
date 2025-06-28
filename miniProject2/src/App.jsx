import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AllTasks from "./pages/AllTasks.jsx";
import CompletedTasks from "./pages/CompletedTasks.jsx";
import About from "./pages/About.jsx";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllTasks />} />
          <Route path="completed" element={<CompletedTasks />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
