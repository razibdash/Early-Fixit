import { Routes, Route, BrowserRouter, useLoaderData } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Service from "./pages/Services/Service";
import Staff from "./pages/Staffs/Staffs";
import About from "./pages/About/About";
import { Login } from "./pages/Auth/Login";
function App() {
  return (
    <Routes>
      <Route path="/" loader={useLoaderData} element={<Home />} />
      <Route path="/services" loader={useLoaderData} element={<Service />} />
      <Route path="/staff" loader={useLoaderData} element={<Staff />} />
      <Route path="/about" loader={useLoaderData} element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
