import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
