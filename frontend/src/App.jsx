import { Routes, Route, BrowserRouter, useLoaderData } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Service from "./pages/Services/Service";

function App() {
  return (
    <Routes>
      <Route path="/" loader={useLoaderData} element={<Home />} />
      <Route path="/services" loader={useLoaderData} element={<Service />} />
    </Routes>
  );
}

export default App;
